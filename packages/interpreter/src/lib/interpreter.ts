// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { BindX, BindY, Interpretation, Term, Token } from './contracts';
import { getModel, PredictModel } from './model';
import { MAX_TOKENS, tokenize } from './tokenize';
import { DataProvider } from './data';
import { resolveEntity } from './entity';
import { createEditAction, isComparison } from './actions';
import { sortBy } from 'lodash';

/**
 * Natural language interpreter convert NL input to interpretations.
 *
 * @export
 * @class Interpreter
 */
export class Interpreter {
  private readonly _model: PredictModel;
  private readonly _dataProvider: DataProvider;

  /**
   * Convert intent to actions by this order.
   *
   * @private
   * @static
   * @memberof Interpreter
   */
  private static _intentOrder = new Map<string, number>([
    ['BindX', 0],
    ['BindY', 1],
    ['BindSeries', 2],
    ['SetChartType', 3],
  ]);

  /**
   * Creates an instance of Interpreter.
   *
   * @param {DataProvider} dataProvider
   * @memberof Interpreter
   */
  public constructor(dataProvider: DataProvider) {
    this._model = getModel();
    this._dataProvider = dataProvider;
  }

  /**
   * Get tensoflor inference model
   *
   * @readonly
   * @type {PredictModel}
   * @memberof Interpreter
   */
  public get model(): PredictModel {
    return this._model;
  }

  /**
   * Get data provider.
   *
   * @readonly
   * @type {DataProvider}
   * @memberof Interpreter
   */
  public get dataProvider(): DataProvider {
    return this._dataProvider;
  }

  /**
   * Interpret a list of natural language input.
   *
   * @param {string[]} lines list of natural language input.
   * @return A list of {@link Interpretation}.
   * @memberof Interpreter
   */
  public execute(lines: string[]): Interpretation[] {
    if (!this._dataProvider) {
      return [];
    }

    const listOfTokenIds = new Array<number[]>();
    const listOfTokens = new Array<Token[]>();

    for (const line of lines) {
      const input = line.toLowerCase();
      const tokens = this._dataProvider.binding(tokenize(input));
      tokens.length = Math.min(tokens.length, MAX_TOKENS);
      listOfTokens.push(tokens);
      const tokenIds = tokens.map((x) => this._model.getWordId(x.term));
      listOfTokenIds.push(tokenIds);
    }

    const preds = this._model.predict(listOfTokenIds);
    const interpretations = new Array<Interpretation>();

    for (let i = 0; i < lines.length; i++) {
      const input = lines[i];
      const tokens = listOfTokens[i];
      const { tags, intents } = preds[i];
      for (let j = 0; j < tokens.length; j++) {
        tokens[j].tag = tags[j];
      }
      interpretations.push(
        this.interpret(this._dataProvider, input, tokens, intents)
      );
    }

    return interpretations;
  }

  /**
   * Parse natural language input to interpretations.
   *
   * @param input - The natural language input.
   * @param tokens - natural language input tokens.
   * @param intents - model intent predictions.
   * @returns A new instance of {@link Interpretation}.
   */
  private interpret(
    dataProvider: DataProvider,
    input: string,
    tokens: Token[],
    intents: string[]
  ): Interpretation {
    const tokenGroups = new Array<Token[]>();
    for (const token of tokens) {
      if (token.tag.startsWith('I-') && tokenGroups.length > 0) {
        const prev = tokenGroups[tokenGroups.length - 1];
        if (
          prev.length > 0 &&
          prev[0].tag.substring(2) === token.tag.substring(2)
        ) {
          tokenGroups[tokenGroups.length - 1].push(token);
          continue;
        }
      }
      tokenGroups.push([token]);
    }

    const terms = new Array<Term>();
    for (const group of tokenGroups) {
      const start = group[0].start;
      const length =
        group[group.length - 1].length + group[group.length - 1].start - start;
      const text = input.substring(start, start + length);
      const tag =
        group[0].tag.startsWith('B-') || group[0].tag.startsWith('I-')
          ? group[0].tag.substring(2)
          : group[0].tag;
      const entity = resolveEntity(tag, text, group);
      terms.push({
        text,
        tag,
        start,
        length,
        entity,
        tokens: group,
      });
    }

    if (
      terms.filter((x) => x.entity.type === 'chart').length > 0 &&
      !intents.includes('SetChartType')
    ) {
      intents.push('SetChartType');
    }

    if (
      terms.filter((x) => x.entity.type === 'aggr').length > 0 &&
      !intents.includes('BindY') &&
      !intents.includes('Highlight')
    ) {
      intents.push('BindY');
    }

    if (
      terms.filter((x) => x.tag === 'sorted' && x.entity.type === 'field')
        .length > 0 &&
      !intents.includes('BindY') &&
      !intents.includes('Highlight')
    ) {
      intents.push('BindY');
    }

    if (
      terms.filter((x) => x.entity.type === 'field').length > 0 &&
      !intents.includes('BindX') &&
      !intents.includes('Repeat') &&
      !intents.includes('BindSeries')
    ) {
      intents.push('BindX');
    }

    if (
      terms.filter((x) => isComparison(x.tag) || x.tag === 'filter').length >
        0 &&
      !intents.includes('Filter') &&
      !intents.includes('AddTrendLine') &&
      !intents.includes('Highlight') &&
      !intents.includes('RemoveDataPoints') &&
      !intents.includes('RemoveSeries') &&
      !intents.includes('AddRectangle')
    ) {
      intents.push('Filter');
    }

    if (
      terms.filter((x) => x.tag === 'top_n').length > 0 &&
      intents.includes('BindX') &&
      intents.includes('BindY') &&
      !intents.includes('Highlight')
    ) {
      intents.push('Highlight');
    }

    const params = terms.filter((x) => x.entity.type !== 'core');
    let actions = sortBy(
      intents,
      (x) => Interpreter._intentOrder.get(x) ?? 100
    ).map((x) => createEditAction(dataProvider, x, params));

    for (const param of params) {
      if (param.entity.type === 'filter') {
        if (
          intents.filter((x) => !(x === 'BindX' || x === 'BindY')).length === 0
        ) {
          actions.push(createEditAction(dataProvider, 'Filter', [param]));
        }
      }
    }

    // merge BindX, BindY with same param
    const bindX = actions.filter((x) => x.type === 'BindX') as BindX[];
    const bindY = actions.filter((x) => x.type === 'BindY') as BindY[];

    if (
      bindX.length === 1 &&
      bindY.length === 1 &&
      bindX[0].field.name === bindY[0].field.name
    ) {
      if (bindY[0].aggr) {
        actions = actions.filter((x) => x !== bindX[0]);
      } else {
        actions = actions.filter((x) => x !== bindY[0]);
      }
    }

    return { input, terms, intents, actions: actions };
  }
}

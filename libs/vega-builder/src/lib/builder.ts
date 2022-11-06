// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import {
  Column,
  createDataProvider,
  DataProvider,
  DataSource,
  Interpretation,
  Interpreter,
} from '@vis-talk/interpreter';
import type { TopLevelSpec } from 'vega-lite';
import { VegaSpecState} from './state';

/**
 * VegaBuilder takes NL input and generate vega-lite spec.
 *
 * ```ts
 * // Example: create a new builder.
 * const builder = createBuilder([
 *   { Brand:'BrandA', Category: 'SUV', Sales: 100 },
 *   { Brand:'BrandB', Category: 'SUV', Sales: 200 },
 *   { Brand:'BrandC', Category: 'SUV', Sales: 300 }
 * ]);
 * ```
 * @export
 * @class VegaBuilder
 */
export class VegaBuilder {
  private readonly _autocompleteStates = new Set<string>();
  private readonly _interpreter: Interpreter;
  private readonly _data: DataSource;
  private _state: VegaSpecState;
  public interpretations: Interpretation[] = [];
  public decorations: string[] = [];

  public constructor(dataSource: DataSource) {
    this._data = dataSource;
    this._interpreter = new Interpreter(createDataProvider(dataSource));
    this._state = new VegaSpecState(this._interpreter.dataProvider, []);
  }

  public get dataProvider(): DataProvider {
    return this._interpreter.dataProvider;
  }

  public get data(): DataSource {
    return this._data;
  }

  public get columns(): Column[] {
    return this._interpreter.dataProvider.columns;
  }

  public get state(): VegaSpecState {
    return this._state;
  }

  /**
   * Specify natural language input.
   *
   * @param {string[]} lines array of natural language input.
   * @return {*}  {VegaBuilder}
   * @memberof VegaBuilder
   */
  public setInput(lines: string[]): VegaBuilder {
    this._autocompleteStates.clear();
    this.interpretations = this._interpreter.execute(lines);
    this._state = new VegaSpecState(
      this._interpreter.dataProvider,
      this.interpretations);

    return this;
  }

  /**
   * Create vega-lite spec.
   *
   * @param {({ name: string } | { values: object[] })} [data] Data spec, could be a named table or row array.
   * @return {*}  {TopLevelSpec}
   * @memberof VegaBuilder
   */
  public build(data?: { name: string } | { values: object[] }): TopLevelSpec {
    return this._state.build(data ?? { name: 'table' });
  }

  /**
   * Generate inline auto-completions.
   *
   * @return {*}  {IterableIterator<string>}
   * @memberof VegaBuilder
   */
  public *autocompletes(): IterableIterator<string> {
    const dimensions = this.columns.filter(
      (x) => x.defaultAggregate === undefined
    );
    const measures = this.columns.filter((x) => x.defaultAggregate);
    const dates = this.columns.filter((x) => x.dataType === 'datetime');
    if (measures.length > 0) {
      if (dates.length > 0) {
        for (const m of measures) {
          const text = `${m.name.toLowerCase()} by ${dates[0].name.toLowerCase()} as line chart`;
          yield text;
        }
      } else if (dimensions.length > 0) {
        for (const m of measures) {
          const text = `${m.name.toLowerCase()} by ${dimensions[0].name.toLowerCase()} as column chart`;
          yield text;
        }
      }
    }

    if (!this._autocompleteStates.has('setColor')) {
      yield 'change data point color to darkcyan';
    }
  }
}

/**
 * Create a new instance of {@link VegaBuilder}.
 *
 * @param dataSource - The data set
 * @returns A new instance of {@link VegaBuilder}.
 */
export function createBuilder(dataSource: DataSource): VegaBuilder {
  const session = new VegaBuilder(dataSource);
  return session;
}

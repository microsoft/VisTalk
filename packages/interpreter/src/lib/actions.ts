// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { AggregateEntity, AggregationType, AggregationTypeEntity, ChartEntity, ColorEntity, ColumnStar, DateTimeRange, EditAction, Field, FieldEntity, FilterEntity, MarkEntity, NumberEntity, Term, TimeUnit } from './contracts';
import { DataProvider } from './data';

/**
 * Convert intent and sequence label/entities to EditAction.
 *
 * @export
 * @param {DataProvider} dataProvider data provider/context.
 * @param {string} intent model predicted intent name
 * @param {Term[]} terms sequence of token/terms with semantic label and entity extracted.
 * @return {*}  {EditAction} Visual edit action.
 */
export function createEditAction(dataProvider: DataProvider, intent: string, terms: Term[]): EditAction {
  const entities = terms.map(x => x.entity);
  switch (intent) {
    case 'BindX': {
      const fields = terms.filter(
        (x) => x.entity.type === 'field'
      );
      const colFields = fields.filter(x => x.tokens[0].term === '<column>').map(x => x.entity) as FieldEntity[];
      const measureFields = fields.filter(x => x.tokens[0].term === '<measure>').map(x => x.entity) as FieldEntity[];
      if (colFields.length > 0) {
        let secondary = colFields.length > 1 ? colFields[1].field : undefined;
        if (secondary && secondary.name === colFields[0].field.name) {
          secondary = undefined;
        }
        return { type: 'BindX', field: colFields[0].field, secondary };
      }
      let secondary = measureFields.length > 1 ? measureFields[1].field : undefined;
      if (measureFields.length > 0) {
        if (secondary && secondary.name === measureFields[0].field.name) {
          secondary = undefined;
        }
        return {
          type: 'BindX',
          field: measureFields[0].field,
          secondary,
        };
      }

      const aggrs = entities.filter(
        (x) => x.type === 'aggr'
      ) as AggregateEntity[];
      if (aggrs.length > 0) {
        return {
          type: 'BindX',
          field: aggrs[0].field,
          aggr: aggrs[0].aggregate,
        };
      }
      return { type: 'noOp' };
    }

    case 'BindY': {
      const aggrs = terms.filter(
        (x) => x.entity.type === 'aggr' && x.tag.startsWith('aggr_'));
      
      for (const aggr of terms.filter(
        (x) => x.entity.type === 'aggr' && x.tag === 'aggr')
      ) {
        aggrs.push(aggr);
      }

      if (aggrs.length > 0) {
        const aggrEntity = aggrs[0].entity as AggregateEntity;

        let secondary: undefined | Field = undefined;
        let secondaryAggr: undefined | AggregationType = undefined;
        if (aggrs.length > 1) {
          const secondaryAggrEntity = aggrs[1].entity as AggregateEntity;
          secondary = secondaryAggrEntity.field;
          secondaryAggr = secondaryAggrEntity.aggregate;
        }
        return {
          type: 'BindY',
          field: aggrEntity.field,
          aggr: aggrEntity.aggregate,
          secondary,
          secondaryAggr,
        };
      }

      const measureFields = terms
        .filter((x) => x.tokens[0].term === '<measure>' &&
          x.entity.type === 'field')
        .map((x) => x.entity) as FieldEntity[];
      if (measureFields.length > 0) {
        return { type: 'BindY', field: measureFields[0].field };
      }

      const fields = entities.filter(
        (x) => x.type === 'field'
      ) as FieldEntity[];
      if (fields.length > 0) {
        return { type: 'BindY', field: fields[0].field };
      }

      return { type: 'noOp' };
    }

    case 'SetChartType': {
      const charts = entities.filter(
        (x) => x.type === 'chart'
      ) as ChartEntity[];
      if (charts.length > 0) {
        return { type: 'SetChartType', chart: charts[0] };
      }
      return { type: 'noOp' };
    }
    
    case 'AddTrendLine': {
      let color = 'red';
      let from = '';
      let to = '';
      let fromTimeUnit: TimeUnit = 'year';
      let toTimeUnit: TimeUnit = 'year';
      const colors = entities.filter(
        (x) => x.type === 'color'
      ) as ColorEntity[];
      if (colors.length > 0) {
        color = colors[0].color;
      }

      for (const term of terms) {
        if (term.entity.type === 'number') {
          switch (term.tag) {
            case 'greaterThanOrEqual':
              from = term.entity.value + '/1/1';
              fromTimeUnit = 'year';
              break;
            case 'lessThanOrEqual':
              to = term.entity.value + '/12/31';
              toTimeUnit = 'year';
              break;
          }
        }
      }

      return {
        type: 'AddTrendLine',
        color,
        range: {
          from,
          to,
          fromTimeUnit,
          toTimeUnit,
        }
      };
    }

    case 'AddGridLines':
      return { type: 'AddGridLines' };

    case 'RemoveGridLines':
      return { type: 'RemoveGridLines' };

    case 'SwapAxis':
      return { type: 'SwapAxis' };

    case 'IncreaseDataPointWidth':
      return { type: 'IncreaseDataPointWidth' };
      
    case 'DecreaseDataPointWidth':
      return { type: 'DecreaseDataPointWidth' };

    case 'BindSeries': {
      const series = terms.filter((x) => x.tag === 'series');
      if (series.length > 0 && series[0].entity.type === 'field') {
        return { type: 'BindSeries', field: series[0].entity.field };
      }
      const fields = terms.filter((x) => x.tag === 'field');
      if (fields.length > 0 && fields[0].entity.type === 'field') {
        return { type: 'BindSeries', field: fields[0].entity.field };
      }
      break;
    }
    case 'SetColor': {
      const colors = entities.filter(
        (x) => x.type === 'color'
      ) as ColorEntity[];
      let target : 'DataPoint' | 'Background' = 'DataPoint';
      for (const term of terms.filter(
        (x) => x.tag === 'target')) {
          if (term.text === 'background') {
            target = 'Background';
            break;
          }
        }

      if (colors.length > 0) {
        return { type: 'SetColor', target, color: colors[0].color };
      }
      // bind color to series field
      const series = terms.filter((x) => x.tag === 'series');
      const termsAggrs = terms.filter((x) => x.tag === 'aggr');
      const termFields = terms.filter((x) => x.tag === 'field');

      if (series.length > 0 && series[0].entity.type === 'field') {
        return { type: 'BindSeries', field: series[0].entity.field };
      }

      if (termsAggrs.length > 0 && termsAggrs[0].entity.type === 'aggr') {
        return { type: 'BindSeries', field: termsAggrs[0].entity.field };
      }

      if (termFields.length > 0 && termFields[0].entity.type === 'field') {
        return { type: 'BindSeries', field: termFields[0].entity.field };
      }

      return { type: 'SetColor', target, color: 'black' };
    }

    case 'AddLine': {
      const values = entities.filter(
        (x) => x.type === 'number'
      ) as NumberEntity[];
      const colors = entities.filter(
        (x) => x.type === 'color'
      ) as ColorEntity[];
      let value = 0;
      let color = 'black';
      if (values.length > 0) {
        value = values[0].value;
      }
      if (colors.length) {
        color = colors[0].color;
      }
      return { type: 'AddLine', value, color };
    }
    case 'IncreaseHeight':
      return { type: 'IncreaseHeight' };
    case 'DecreaseHeight': {
      const values = terms.filter(x => x.entity.type === 'number' && x.tag === 'value').map(x => x.entity) as NumberEntity[];
      if (values.length > 0) {
        return { type: 'DecreaseHeight', height: values[0].value };
      }
      return { type: 'DecreaseHeight' };
    }
    case 'IncreaseWidth':
      return { type: 'IncreaseWidth' };
    case 'DecreaseWidth':
      return { type: 'DecreaseWidth' };
    case 'ChangeAggregation': {
      const aggrTypes = entities.filter(
        (x) => x.type === 'aggrType'
      ) as AggregationTypeEntity[];
      if (aggrTypes.length > 0) {
        return {
          type: 'ChangeAggregation',
          aggregate: aggrTypes[0].aggregate,
        };
      }
      return { type: 'ChangeAggregation', aggregate: 'sum' };
    }

    case 'SortDefault':{
      const sortFields = terms.filter(x => x.tag === 'sorted').map(x => x.entity) as FieldEntity[];
      const field = sortFields.length === 0 ? undefined : sortFields[0].field;
      return { type: 'Sort', direction: 'auto', field };
    }

    case 'SortAsc': {
      const sortFields = terms.filter(x => x.tag === 'sorted').map(x => x.entity) as FieldEntity[];
      const field = sortFields.length === 0 ? undefined : sortFields[0].field;
      return { type: 'Sort', direction: 'asc', field };
    }

    case 'SortDesc': {
      const sortFields = terms.filter(x => x.tag === 'sorted').map(x => x.entity) as FieldEntity[];
      const field = sortFields.length === 0 ? undefined : sortFields[0].field;
      return { type: 'Sort', direction: 'desc', field };
    }

    case 'AddRectangle': {
      let color = '#cccccc';
      let from = 0;
      let to = 0;
      let fromDateTime = '';
      let toDateTime = '';
      const colors = entities.filter(
        (x) => x.type === 'color'
      ) as ColorEntity[];
      if (colors.length > 0) {
        color = colors[0].color;
      }

      for (const term of terms) {
        if (term.entity.type === 'number') {
          switch (term.tag) {
            case 'greaterThanOrEqual':
              from = term.entity.value;
              break;
            case 'lessThanOrEqual':
              to = term.entity.value;
              break;
          }
        }

        if (term.entity.type === 'datetime') {
          switch (term.tag) {
            case 'greaterThanOrEqual':
              fromDateTime = term.entity.value;
              break;
            case 'lessThanOrEqual':
              toDateTime = term.entity.value;
              break;
          }
        }
      }

      const timeRange : DateTimeRange | undefined = (fromDateTime === '' || toDateTime === '') ?
        undefined : {
          from: fromDateTime,
          to: toDateTime,
          fromTimeUnit: 'yearmonthdate',
          toTimeUnit: 'yearmonthdate' };
      return {
        type: 'AddRectangle',
        color,
        timeRange,
        yRange: {
          from,
          to
        }
      };
    }

    case 'Repeat': {
      const fields = entities.filter(
        (x) => x.type === 'field'
      ) as FieldEntity[];
      if (fields.length > 0)
        {return { type: 'Repeat', field: fields[0].field.name };}
      break;
    }

    case 'RemoveDataPoints': {
      const filterEntities = entities.filter(
        (x) => x.type === 'filter'
      ) as FilterEntity[];
      return {
        type: 'RemoveDataPoints',
        filters: filterEntities.map((x) => x.filter),
      };
    }

    case 'AddSeries': {
      const groupBys = entities.filter(x => x.type === 'field') as FieldEntity[];
      const aggregations = entities.filter(x => x.type === 'aggr') as AggregateEntity[];

      return { type: 'AddSeries', groupBys: groupBys.map(x => x.field), aggregations };
    }

    case 'RemoveSeries': {
      const filterEntities = entities.filter(
        (x) => x.type === 'filter'
      ) as FilterEntity[];
      return {
        type: 'RemoveSeries',
        filters: filterEntities.map((x) => x.filter),
      };
    }

    case 'SetMark': {
      const marks = terms.filter((x) => x.entity.type === 'mark');
      if (marks.length > 0) {
        const mark = marks[0].entity as MarkEntity;
        const { markType, customShape, markFilled, shape } = mark;
        return { type: 'SetMark', markType, customShape, markFilled, shape };
      }
      break;
    }

    case 'Highlight': {
      const highlightValues: { key: Field; value: string; }[] = [];
      const values: { key: Field; value: string; }[] = [];
      let fill = 'orange';
      let topN: number | undefined = undefined;
      for (const term of terms) {
        if (term.entity.type === 'color') {
          fill = term.entity.color;
        } else if (term.entity.type === 'number' && term.tag === 'top_n') {
          topN = term.entity.value;
        } else if (term.entity.type === 'filter') {
          if (term.entity.filter.target.type === 'string') {
            values.push({
              key: term.entity.filter.subject,
              value: term.entity.filter.target.value,
            });
          }
        }
      }
      for (const value of values) {
        highlightValues.push({
          key: value.key,
          value: value.value,
        });
      }
      return {
        type: 'Highlight',
        values: highlightValues,
        topN,
        color: fill,
      };
    }

    case 'Filter': {
      const filters = terms.filter(x => x.entity.type === 'filter').map(x => x.entity) as FilterEntity[];
      const compare = terms.filter(x => x && isComparison(x.tag));
      for (const cmp of compare) {
        let target = cmp.entity;
        let subject = ColumnStar;
        let aggregate: AggregationType | undefined = undefined;
        for (const term of terms) {
          if (term.entity.type === 'aggr') {
            subject = term.entity.field;
            aggregate = term.entity.aggregate;
            break;
          }
        }

        if (subject === ColumnStar) {
          let subjects = terms.filter(x => x.tokens[0].term === '<measure>').map(x => x.entity) as FieldEntity[];
          if (subjects.length === 0) {
            subjects = terms.filter(x => x.entity.type === 'field').map(x => x.entity) as FieldEntity[];
          }

          if (subjects.length === 0) {
            for (const term of terms) {
              if (term.entity.type === 'aggr') {
                subject = term.entity.field;
                break;
              }
              if (term.entity.type === 'field') {
                subject = term.entity.field;
                break;
              }
            }
          } else {
            subject = subjects[0].field;
          }
        }

        // check year
        const yearColumn = dataProvider.columns.filter(x => x.dataType === 'datetime')[0];
        if (yearColumn) {
          if (cmp.entity.type === 'number' && cmp.entity.value > 1800 && cmp.entity.value < 2200) {
            subject = yearColumn;
            target = { type: 'datetime', value: cmp.entity.value + '/1/1' };
          }
        }
        
        const operator = getCompareOperator(cmp.tag);
        filters.push({
          type: 'filter',
          filter: {
            subject,
            aggregate,
            operator,
            target,
            isNot: false,
          },
        });
      }

      return { type: 'Filter', filters: filters.map(x => x.filter) };
    }

    default:
      console.log('Not implemented intent: ' + intent);
      break;
  }

  return { type: 'noOp' };
}

/**
 * Convert tag to comparison operator.
 *
 * @param {string} tag
 * @return {*}  {string}
 */
function getCompareOperator(tag: string): string {
  switch (tag) {
    case 'greaterThanOrEqual':
      return '>=';

    case 'greaterThan':
      return '>';

    case 'lessThan':
      return '<';

    case 'lessThanOrEqual':
      return '<=';

    default:
      return '=';
  }
}

/**
 * Return tag is a filter comparison operator.
 *
 * @export
 * @param {string} tag
 * @return True if tag is a comparision operator.
 */
export function isComparison(tag: string): boolean {
  switch (tag) {
    case 'greaterThan':
    case 'greaterThanOrEqual':
    case 'lessThan':
    case 'lessThanOrEqual':
    case 'equal':
      return true;

    default:
      return false;
  }
}


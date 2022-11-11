// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import {
  AggregationTypeEntity,
  ColumnStar,
  Entity,
  MarkEntity,
  MarkType,
  Token,
} from './contracts';

/**
 * Get chartEntity from text.
 *
 * @param chart - Text input.
 * @returns chart entity.
 */
function resolveChartType(chart: string): Entity {
  const chartType = chart
    .toLowerCase()
    .replace('chart', '')
    .replace('graph', '')
    .replace('plot', '')
    .trim();

  switch (chartType) {
    case 'scatter':
    case 'xyplot':
      return {
        type: 'chart',
        markType: 'point',
        isClustered: false,
        swapAxis: true,
        bin: false,
        implictAggregation: true,
      };

    case 'histogram':
    case 'distribution':
    case 'categorization':
      return {
        type: 'chart',
        markType: 'bar',
        isClustered: false,
        swapAxis: false,
        bin: true,
        implictAggregation: false,
      };

    case 'bar':
      return {
        type: 'chart',
        markType: 'bar',
        isClustered: false,
        swapAxis: true,
        implictAggregation: true,
      };

    case 'clustered bar':
      return {
        type: 'chart',
        markType: 'bar',
        isClustered: true,
        swapAxis: true,
        implictAggregation: true,
      };

    case 'stacked bar':
      return {
        type: 'chart',
        markType: 'bar',
        isClustered: false,
        swapAxis: true,
        implictAggregation: true,
      };

    case 'vertical bar':
    case 'column':
      return {
        type: 'chart',
        markType: 'bar',
        isClustered: false,
        swapAxis: false,
        implictAggregation: true,
      };

    case 'clustered column':
      return {
        type: 'chart',
        markType: 'bar',
        isClustered: true,
        swapAxis: false,
        implictAggregation: true,
      };

    case 'stacked column':
      return {
        type: 'chart',
        markType: 'bar',
        isClustered: false,
        swapAxis: false,
        implictAggregation: true,
      };

    case 'pie':
      return {
        type: 'chart',
        markType: 'arc',
        isClustered: false,
        swapAxis: false,
        implictAggregation: true,
      };

    case 'donut':
      return {
        type: 'chart',
        markType: 'arc',
        isClustered: false,
        swapAxis: false,
        innerRadius: 40,
        implictAggregation: true,
      };

    case 'line':
      return {
        type: 'chart',
        markType: 'line',
        isClustered: false,
        swapAxis: false,
        implictAggregation: true,
      };

    case 'area':
      return {
        type: 'chart',
        markType: 'area',
        isClustered: false,
        swapAxis: false,
        implictAggregation: true,
      };

    default:
      break;
  }
  console.log('unkown chart ' + chart);
  return { type: 'core', text: chart };
}

/**
 * Resolve color entity from text.
 *
 * @param text - Text input.
 * @returns Color name or hex value.
 */
function resolveColor(text: string): string {
  switch (text) {
    case 'red':
      return '#E0181A';

    case 'blue':
      return 'steelblue';

    case 'green':
      return '#54a24b';

    case 'yellow':
      return '#eeca3b';

    case 'dark green':
      return '#387031';

    case 'dark blue':
      return '#383868';

    case 'light gray':
      return 'LightGray';
  }
  return text;
}

function resolveComponent(text: string) {
  return text === 'background' ? 'Background' : 'DataPont';
}

function resolveMark(text: string): MarkEntity {
  let markType: MarkType = 'tick';
  let shape = '';
  const customShape = false;
  const markFilled = false;
  switch (text) {
    case 'point':
      markType = 'point';
      break;
    case 'line':
      markType = 'line';
      break;
    case 'circle':
      markType = 'circle';
      break;
    case 'bar':
      markType = 'bar';
      break;
    case 'arc':
      markType = 'arc';
      break;
    case 'area':
      markType = 'area';
      break;
    case 'image':
      markType = 'image';
      break;
    case 'rect':
      markType = 'rect';
      break;
    case 'text':
      markType = 'text';
      break;
    case 'rule':
      markType = 'rule';
      break;
    case 'square':
      markType = 'square';
      break;
    case 'tick':
      markType = 'tick';
      break;
    case 'geoshape':
      markType = 'geoshape';
      break;
    case 'arrow':
    case 'cross':
    case 'diamond':
    case 'triangle-up':
    case 'triangle-down':
    case 'triangle-left':
    case 'triangle-right':
      markType = 'point';
      shape = text;
      break;
    default:
      break;
  }

  return { type: 'mark', markType, shape, customShape, markFilled };
}

function resolveAggregation(text: string): AggregationTypeEntity | null {
  switch (text) {
    case 'sum':
      return { type: 'aggrType', aggregate: 'sum' };
    case 'average':
    case 'avg':
    case 'mean':
      return { type: 'aggrType', aggregate: 'mean' };
    case 'min':
      return { type: 'aggrType', aggregate: 'min' };
    case 'max':
      return { type: 'aggrType', aggregate: 'max' };
  }
  return null;
}

/**
 * Extract entities from the tokens.
 *
 * @param tag - The predicted tag label.
 * @param text - token text.
 * @param tokens - The natural language tokens
 * @returns A new instance of {@link Entity}.
 */
export function resolveEntity(
  tag: string,
  text: string,
  tokens: Token[]
): Entity {
  switch (tag) {
    case 'mark':
      return resolveMark(text);

    case 'aggregation':
      {
        const aggrType = resolveAggregation(text);
        if (aggrType) return aggrType;
      }
      break;

    case 'chart':
      return resolveChartType(text);

    case 'color':
      if (tokens[0].entity.type === 'color') return tokens[0].entity;
      return { type: 'color', color: resolveColor(text) };

    case 'target':
      return { type: 'component', target: resolveComponent(text) };

    case 'filter':
      if (tokens[0].entity.type === 'filter') {
        return tokens[0].entity;
      }
      break;

    case 'sorted':
    case 'field':
    case 'series':
    case 'subject':
      if (tokens[0].entity.type === 'field') {
        return tokens[0].entity;
      }
      break;

    case 'value':
    case 'equal':
    case 'greaterThan':
    case 'greaterThanOrEqual':
    case 'lessThanOrEqual':
    case 'lessThan':
      if (tokens[0].entity.type === 'core') {
        switch (tokens[0].text) {
          case 'one':
          case 'once':
            return { type: 'number', value: 1 };

          case 'avg':
          case 'average':
          case 'mean':
          case 'middle':
            return { type: 'aggrType', aggregate: 'mean' };
            
          case 'max':
            return { type: 'aggrType', aggregate: 'max' };

          case 'min':
            return { type: 'aggrType', aggregate: 'min' };
        }
      }
      return tokens[0].entity;

    case 'top_n':
      if (tokens[0].entity.type === 'core') {
        switch (tokens[0].text) {
          case 'one':
          case 'once':
            return { type: 'number', value: 1 };
        }
      }
      return tokens[0].entity;

    case 'aggr':
      if (tokens[0].entity.type === 'field') {
        return { type: 'aggr', field: tokens[0].entity.field };
      }

      if (tokens[0].text === 'count') {
        return { type: 'aggr', field: ColumnStar, aggregate: 'count' };
      }

      break;

    case 'aggr_sum':
      if (tokens[0].entity.type === 'field') {
        return {
          type: 'aggr',
          field: tokens[0].entity.field,
          aggregate: 'sum',
        };
      }
      break;

    case 'aggr_count':
    case 'aggr_dcount':
      if (tokens[0].entity.type === 'field') {
        return {
          type: 'aggr',
          field: tokens[0].entity.field,
          aggregate: 'distinct',
        };
      }
      break;

    case 'aggr_avg':
      if (tokens[0].entity.type === 'field') {
        return {
          type: 'aggr',
          field: tokens[0].entity.field,
          aggregate: 'mean',
        };
      }
      break;

    case 'aggr_min':
      if (tokens[0].entity.type === 'field') {
        return {
          type: 'aggr',
          field: tokens[0].entity.field,
          aggregate: 'min',
        };
      }
      break;

    case 'aggr_max':
      if (tokens[0].entity.type === 'field') {
        return {
          type: 'aggr',
          field: tokens[0].entity.field,
          aggregate: 'max',
        };
      }
      break;

    default:
      break;
  }

  return tokens[0].entity;
}

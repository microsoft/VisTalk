// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { io } from '@tensorflow/tfjs';

/**
 * Model configuration, including tensorflow model data and graph, and vocabs
 *
 * @export
 * @interface ModelConfig
 */
export interface ModelConfig {
  intents: string[];
  tags: string[];
  words: { [word: string]: number };
  model_graph: io.ModelJSON;
  model_data: string;
}

/**
 * Model predicted sequence and intents.
 *
 * @export
 * @interface ModelPrediction
 */
export interface ModelPrediction {
  tags: string[];
  intents: string[];
}
/**
 * Data source, an array of object records.
 * record value could be parsed or raw string.
 *
 * @export
 * @interface DataSource
 * @extends {Array<object>}
 */
export interface DataSource extends Array<object> {
  /**
   * List of column names.
   */
  columns?: Array<string>;
}

/**
 * Date time unit.
 */
export type TimeUnit = 'year' | 'yearmonthdate';

/**
 * Column value data types.
 */
export type DataType = 'datetime' | 'string' | 'number' | 'boolean';

/**
 * Semantic types.
 */
export type DataCategory = 'years';

/**
 * Data table column metadata.
 *
 * @export
 * @interface Column
 */
export interface Column {

  /**
   * Name of the column
   *
   * @type {string}
   * @memberof Column
   */
  name: string;

  /**
   * Data type of the column values.
   *
   * @type {DataType}
   * @memberof Column
   */
  dataType: DataType;

  /**
   * Semantic type of the data values.
   *
   * @type {DataCategory}
   * @memberof Column
   */
  dataCategory?: DataCategory;

  /**
   * Default aggregation type for measure column.
   *
   * @type {AggregationType}
   * @memberof Column
   */
  defaultAggregate?: AggregationType;

  /**
   * String column distinct values.
   *
   * @type {Set<string>}
   * @memberof Column
   */
  lookupValues?: Set<string>;

  /**
   * How many distinct values.
   *
   * @type {number}
   * @memberof Column
   */
  distinctValuesCount: number;
  
  /**
   * Max string length of the column values.
   * Used for layout axis labels.
   *
   * @type {number}
   * @memberof Column
   */
  maxValueLen: number;
}

/**
 * Field could be column from source data table or derived column like aggregated column "Sum of Sales"
 *
 * @export
 * @interface Field
 */
export interface Field {
  name: string;
  dataType: DataType;
  dataCategory?: DataCategory;
  defaultAggregate?: AggregationType;
}

/**
 * Used for represent the * column in count(*)
 */
export const ColumnStar: Field = {
  name: '*',
  dataType: 'number',
};

/**
 * A filter item.
 *
 * @export
 * @interface FilterItem
 */
export interface FilterItem {
  subject: Field;
  aggregate?: AggregationType;
  operator: string;
  target: Entity;
  isNot: boolean;
  isYear?: boolean;
}

/**
 * Mark type.
 */
export type MarkType =
  | 'arc'
  | 'area'
  | 'bar'
  | 'image'
  | 'line'
  | 'point'
  | 'rect'
  | 'rule'
  | 'text'
  | 'tick'
  | 'trail'
  | 'circle'
  | 'square'
  | 'geoshape';


export interface DateTimeRange {
  fromTimeUnit: TimeUnit;
  toTimeUnit: TimeUnit;
  from: string;
  to: string;
}

export interface Aggregation {
  field: Field;
  aggregate?: AggregationType;
  transformed?: boolean;
}

export interface AutoCompleteItem {
  key: string;
  text: string;
}

export interface TrendLine {
  color: string;
  range?: DateTimeRange;
}

export interface ValueMatch {
  field: Field;
  tokens: string[];
  filter: FilterItem;
  boolMatch: boolean;
  exact: boolean;
}

export interface ColumnMatch {
  field: Field;
  tokens: string[];
  exact: boolean;
}

/**
 * Store data context.
 */
export interface DataContext {
  columns: Column[];
  date: string | null;
  measure: string | null;
}

export interface ValueMatch {
  field: Field;
  tokens: string[];
  filter: FilterItem;
  boolMatch: boolean;
  exact: boolean;
}

export interface ColumnMatch {
  field: Field;
  tokens: string[];
  exact: boolean;
}

export interface ChartEntity {
  type: 'chart';
  markType: MarkType;
  swapAxis: boolean;
  implictAggregation: boolean;
  isClustered: boolean;
  innerRadius?: number;
  bin?: boolean;
}

export interface ColorEntity {
  type: 'color';
  color: string;
}

export interface ComponentEntity {
  type: 'component';
  target: "DataPont" | "Background";
}

export interface CoreEntity {
  type: 'core';
  text: string;
}

export interface UNKEntity {
  type: 'unk';
}

export interface FilterEntity {
  type: 'filter';
  filter: FilterItem;
}

export interface NumberEntity {
  type: 'number';
  value: number;
  strNum?: boolean;
}

export interface StringEntity {
  type: 'string';
  value: string;
}

export interface DateTimeEntity {
  type: 'datetime';
  value: string;
}

export interface FieldEntity {
  type: 'field';
  field: Field;
}

export type AggregationType =
  | 'sum'
  | 'mean'
  | 'count'
  | 'min'
  | 'max'
  | 'distinct';

export interface AggregateEntity {
  type: 'aggr';
  field: Field;
  aggregate?: AggregationType;
}

export interface AggregationTypeEntity {
  type: 'aggrType';
  aggregate: AggregationType;
}

export interface MarkEntity {
  type: 'mark';
  markType: MarkType;
  customShape: boolean;
  markFilled: boolean;
  shape?: string;
}

export interface Token {
  term: string;
  text: string;
  norm: string;
  start: number;
  length: number;
  type: string;
  tag: string;
  entity: Entity;
}

export interface Term {
  text: string;
  tag: string;
  entity: Entity;
  start: number;
  length: number;
  tokens: Token[];
}

export type Entity =
  | MarkEntity
  | ChartEntity
  | ColorEntity
  | ComponentEntity
  | CoreEntity
  | FilterEntity
  | FieldEntity
  | AggregationTypeEntity
  | AggregateEntity
  | NumberEntity
  | StringEntity
  | DateTimeEntity
  | UNKEntity;

export interface Interpretation {
  input: string;
  terms: Term[];
  intents: string[];
  actions: EditAction[];
}

/**
 * Add trend line edit action.
 */
export interface AddTrendLine {
  type: 'AddTrendLine';
  color: string;
  range?: DateTimeRange;
}

/**
 * Show grid line edit action.
 */
export interface AddGridLines {
  type: 'AddGridLines';
}

/**
 * Hide grid line edit action.
 */
export interface RemoveGridLines {
  type: 'RemoveGridLines';
}

/**
 * Swap X Y axis edit action.
 */
export interface SwapAxis {
  type: 'SwapAxis';
}

/**
 * Increase data point size / width edit action.
 */
export interface IncreaseDataPointWidth {
  type: 'IncreaseDataPointWidth';
}

/**
 * Decrease data point size / width edit action.
 */
export interface DecreaseDataPointWidth {
  type: 'DecreaseDataPointWidth';
}

/**
 * Set data point color edit action.
 */
export interface SetColor {
  type: 'SetColor';
  color: string;
  target: 'DataPoint' | 'Background';
}

/**
 * Bind series to column edit action.
 */
export interface BindSeries {
  type: 'BindSeries';
  field: Field;
}

/**
 * Add line annotation edit action.
 */
export interface AddLine {
  type: 'AddLine';
  value: number;
  color: string;
  aggr?: AggregationType;
}

/**
 * Set mark type edit action.
 */
export interface SetMark {
  type: 'SetMark';
  markType: MarkType;
  customShape: boolean;
  markFilled: boolean;
  shape?: string;
}

/**
 * Sort edit action.
 */
export interface Sort {
  type: 'Sort';
  field?: Field;
  direction: 'asc' | 'desc' | 'auto';
}

/**
 * Add rectangle annotation edit action.
 */
export interface AddRectangle {
  type: 'AddRectangle';
  color: string;
  yRange?: { from: number, to: number };  
  timeRange?: DateTimeRange;
}

/**
 * Highlight data point edit action.
 */
export interface Highlight {
  type: 'Highlight';
  /**
   * Highlight color.
   */
  color: string;
  /**
   * Highlight value filter.
   */
  values?: {
    /**
     * Highlight value filter dimension.
     */
    key: Field;
    /**
     * Highlight value filter dimension value.
     */
    value: string;
  }[];

  aggr?: AggregationType;

  /**
   * Highlight by topN data points.
   */
  topN?: number;
}

/**
 * Unknown edit action.
 */
export interface NoOp {
  type: 'noOp';
}

/**
 * Change aggregation type edit action.
 */
export interface ChangeAggregation {
  type: 'ChangeAggregation';
  aggregate: AggregationType;
}

/**
 * Increase chart height edit action.
 */
export interface IncreaseHeight {
  type: 'IncreaseHeight';
}

/**
 * Decrease chart height edit action.
 */
export interface DecreaseHeight {
  type: 'DecreaseHeight';
  height?: number;
}

/**
 * Increase chart width edit action.
 */
export interface IncreaseWidth {
  type: 'IncreaseWidth';
}

/**
 * Descrease chart width edit action.
 */
export interface DecreaseWidth {
  type: 'DecreaseWidth';
}

/**
 * Add series edit action.
 */
export interface AddSeries {
  type: 'AddSeries';
  /**
   * Bind series columns.
   */
  groupBys: Field[];
  /**
   * Bind series aggregations.
   */
  aggregations: AggregateEntity[];
}

/**
 * Remove series edit action.
 */
export interface RemoveSeries {
  type: 'RemoveSeries';
  /**
   * Remove filters.
   */
  filters: FilterItem[];
}

/**
 * Remove data point edit action.
 */
export interface RemoveDataPoints {
  type: 'RemoveDataPoints';
  filters: FilterItem[];
}

/**
 * Change chart type edit action.
 */
export interface SetChartType {
  type: 'SetChartType';
  chart: ChartEntity;
}

/**
 * Bind X axis edit action.
 */
export interface BindX {
  type: 'BindX';
  /**
   * X field column.
   */
  field: Field;
  /**
   * [optional] Optional X field name.
   */
  secondary?: Field;
  /**
   * [optional] Aggregation type.
   */
  aggr?: AggregationType;
}

/**
 * Bind Y axis edit action.
 */
export interface BindY {
  type: 'BindY';
  /**
   * Y field column.
   */
  field: Field;
  /**
   * Aggregation type.
   */
  aggr?: AggregationType;

  /**
   * [optional] Optional Y field.
   */
  secondary?: Field;
  /**
   * [optional] Optional aggregation type.
   */
  secondaryAggr?: AggregationType;
}

/**
 * Repeat edit action.
 */
export interface Repeat {
  type: 'Repeat';
  field: string;
}

/**
 * Filter edit action.
 */
export interface Filter {
  type: 'Filter';
  filters: FilterItem[];
}

/**
 * Edit actions.
 */
export type EditAction =
  | NoOp
  | AddTrendLine
  | AddGridLines
  | RemoveGridLines
  | SwapAxis
  | IncreaseDataPointWidth
  | DecreaseDataPointWidth
  | SetColor
  | BindSeries
  | AddLine
  | IncreaseHeight
  | DecreaseHeight
  | IncreaseWidth
  | DecreaseWidth
  | SetChartType
  | ChangeAggregation
  | AddSeries
  | RemoveSeries
  | RemoveDataPoints
  | BindX
  | BindY
  | SetMark
  | Sort
  | AddRectangle
  | Highlight
  | Repeat
  | Filter;

/**
 * Visitor interface to process action and generate visual spec.
 */
export abstract class ActionVisitor {
  /**
   * Visitor an edit action, it will call visitAction by action type.
   */
  public visitEditAction(action: EditAction) {
    switch (action.type) {
      case 'AddTrendLine':
        return this.visitAddTrendLine(action);

      case 'AddGridLines':
        this.visitAddGridLines(action);
        break;

      case 'RemoveGridLines':
        this.visitRemoveGridLines(action);
        break;

      case 'SwapAxis':
        this.visitSwapAxis(action);
        break;

      case 'IncreaseDataPointWidth':
        this.visitIncreaseDataPointWidth(action);
        break;

      case 'DecreaseDataPointWidth':
        this.visitDecreaseDataPointWidth(action);
        break;

      case 'SetColor':
        this.visitSetColor(action);
        break;

      case 'BindSeries':
        this.visitBindSeries(action);
        break;

      case 'AddLine':
        this.visitAddLine(action);
        break;

      case 'IncreaseHeight':
        this.visitIncreaseHeight(action);
        break;

      case 'DecreaseHeight':
        this.visitDecreaseHeight(action);
        break;

      case 'IncreaseWidth':
        this.visitIncreaseWidth(action);
        break;

      case 'DecreaseWidth':
        this.visitDecreaseWidth(action);
        break;

      case 'SetChartType':
        this.visitSetChartType(action);
        break;

      case 'ChangeAggregation':
        this.visitChangeAggregation(action);
        break;

      case 'BindX':
        this.visitBindX(action);
        break;

      case 'BindY':
        this.visitBindY(action);
        break;

      case 'Sort':
        this.visitSort(action);
        break;

      case 'AddSeries':
        this.visitAddSeries(action);
        break;

      case 'RemoveSeries':
        this.visitRemoveSeries(action);
        break;

      case 'RemoveDataPoints':
        this.visitRemoveDataPoints(action);
        break;

      case 'Highlight':
        this.visitHighlight(action);
        break;

      case 'SetMark':
        this.visitSetMark(action);
        break;

      case 'Repeat':
        this.visitRepeat(action);
        break;

      case 'Filter':
        this.visitFilter(action);
        break;

      case 'AddRectangle':
        this.visitAddRectangle(action);
        break;
        
      default:
        console.log({ UnknownCommand: action });
        break;
    }
  }
  abstract visitAddGridLines(command: AddGridLines): void;
  abstract visitDecreaseDataPointWidth(command: DecreaseDataPointWidth): void;
  abstract visitIncreaseWidth(command: IncreaseWidth): void;
  abstract visitDecreaseHeight(command: DecreaseHeight): void;
  abstract visitBindY(command: BindY): void;
  abstract visitBindX(command: BindX): void;
  abstract visitChangeAggregation(command: ChangeAggregation): void;
  abstract visitSetChartType(command: SetChartType): void;
  abstract visitDecreaseWidth(command: DecreaseWidth): void;
  abstract visitIncreaseHeight(command: IncreaseHeight): void;
  abstract visitAddLine(command: AddLine): void;
  abstract visitSetColor(command: SetColor): void;
  abstract visitBindSeries(command: BindSeries): void;
  abstract visitIncreaseDataPointWidth(command: IncreaseDataPointWidth): void;
  abstract visitSwapAxis(command: SwapAxis): void;
  abstract visitRemoveGridLines(command: RemoveGridLines): void;
  abstract visitAddTrendLine(command: AddTrendLine): void;
  abstract visitSetMark(command: SetMark): void;
  abstract visitSort(command: Sort): void;
  abstract visitAddRectangle(commmand: AddRectangle): void;
  abstract visitHighlight(commmand: Highlight): void;
  abstract visitRemoveSeries(command: RemoveSeries): void;
  abstract visitRemoveDataPoints(commmand: RemoveDataPoints): void;
  abstract visitRepeat(commmand: Repeat): void;
  abstract visitAddSeries(command: AddSeries): void;
  abstract visitFilter(command: Filter): void;
}

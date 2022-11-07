// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type {
  Field,
  PositionDef,
  PositionFieldDef,
} from 'vega-lite/build/src/channeldef';
import type { TopLevelSpec, UnitSpec } from 'vega-lite/build/src/spec';
import type { Transform } from 'vega-lite/build/src/transform';
import type { StandardType } from 'vega-lite/build/src/type';
import type { TimeUnit } from 'vega-lite/build/src/timeunit';
import {
  AddGridLines,
  AddLine,
  AddRectangle,
  AddSeries,
  AddTrendLine,
  Aggregation,
  BindSeries,
  BindX,
  BindY,
  ChangeAggregation,
  ActionVisitor,
  DataProvider,
  DecreaseDataPointWidth,
  DecreaseHeight,
  DecreaseWidth,
  Filter,
  FilterItem,
  Highlight,
  IncreaseDataPointWidth,
  IncreaseHeight,
  IncreaseWidth,
  Interpretation,
  RemoveDataPoints,
  RemoveGridLines,
  RemoveSeries,
  Repeat,
  SetChartType,
  SetColor,
  SetMark,
  Sort,
  SwapAxis,
  Column,
  ColumnStar,
  AggregateEntity,
  AggregationType,
} from '@vis-talk/interpreter';
import { changeAggregate, getUnitSpec, getXField } from './utils';
import { sortBy, isEqual, clone } from 'lodash';
import { TopLevelUnitSpec } from 'vega-lite/build/src/spec/unit';
import { AggregateOp } from 'vega';
import { Dict } from 'vega-lite/build/src/util';

export class Defaults {
  public static minHeight = 150;
  public static minWidth = 150;
  public static defaultHistogramHeight = 250;
  public static defaultHistogramWidth = 300;
  public static defaultFillColor = '#418ded';
}

/**
 * Store vega-lite spec and update based on visual edit actions.
 *
 * @export
 * @class VegaSpecState
 * @extends {ActionVisitor}
 */
export class VegaSpecState extends ActionVisitor {
  private readonly _dataProvider: DataProvider;
  private _spec: TopLevelSpec;

  private _interpretations: Interpretation[];
  private autoMarkType: boolean;
  private _data: { values: object[] } | { name: string };

  constructor(dataProvider: DataProvider, interpretations: Interpretation[]) {
    super();

    this._dataProvider = dataProvider;
    this._interpretations = interpretations;
    this.autoMarkType = true;

    this._data = { name: 'table' };
    this._spec = this.createInitSpec();
  }

  /**
   * If the chart is a time series chart.
   *
   * @readonly
   * @type {boolean}
   * @memberof VegaSpecState
   */
  public get isTimeSeries(): boolean {
    const unit = getUnitSpec(this._spec);
    if (unit) {
      const x = this.getX(unit);
      if (x) {
        return x.type === 'temporal';
      }
    }

    return false;
  }

  /**
   * Return custom usermeta for vega-lite spec.
   *
   * @readonly
   * @private
   * @type {Dict<unknown>}
   * @memberof VegaSpecState
   */
  private get usermeta(): Dict<unknown> {
    return {
      inputs: this._interpretations.map((x) => x.input),
      editActions: this._interpretations.map((x) => x.actions).flat(),
    };
  }

  /**
   * Create a blank vega-lite spec to start with.
   *
   * @private
   * @return {*}  {TopLevelSpec}
   * @memberof VegaSpecState
   */
  private createInitSpec(): TopLevelSpec {
    return {
      data: this._data,
      width: Defaults.minWidth,
      height: Defaults.minHeight,
      mark: { type: 'tick' },
      encoding: { color: { value: Defaults.defaultFillColor } },
      autosize: {
        type: 'fit',
        contains: 'padding',
      },
      usermeta: this.usermeta,
    };
  }

  /**
   * Execute a sequence of interpreted edit actions.
   *
   * @private
   * @param {Interpretation[]} interpretations
   * @memberof VegaSpecState
   */
  private reducer(interpretations: Interpretation[]): void {
    for (const interpretation of interpretations) {
      for (const command of sortBy(interpretation.actions, (x) =>
        getRank(x.type)
      )) {
        this.visitEditAction(command);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitRemoveGridLines(_: RemoveGridLines): void {
    if ('mark' in this._spec) {
      if (this._spec.encoding) {
        if (this._spec.encoding.x && 'field' in this._spec.encoding.x) {
          this._spec.encoding.x.axis = { grid: false };
        }
        if (this._spec.encoding.y && 'field' in this._spec.encoding.y) {
          this._spec.encoding.y.axis = { grid: false };
        }
      }
    }

    if ('layer' in this._spec && this._spec.layer.length > 0) {
      const layer = this._spec.layer[0];
      if (layer.encoding) {
        if (layer.encoding.x && 'field' in layer.encoding.x) {
          layer.encoding.x.axis = { grid: false };
        }
        if (layer.encoding.y && 'field' in layer.encoding.y) {
          layer.encoding.y.axis = { grid: false };
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitAddGridLines(command: AddGridLines): void {
    if ('mark' in this._spec) {
      if (this._spec.encoding) {
        if (this._spec.encoding.x && 'field' in this._spec.encoding.x) {
          this._spec.encoding.x.axis = { grid: true };
        }
        if (this._spec.encoding.y && 'field' in this._spec.encoding.y) {
          this._spec.encoding.y.axis = { grid: true };
        }
      }
    }

    if ('layer' in this._spec && this._spec.layer.length > 0) {
      const layer = this._spec.layer[0];
      if (layer.encoding) {
        if (layer.encoding.x && 'field' in layer.encoding.x) {
          layer.encoding.x.axis = { grid: true };
        }
        if (layer.encoding.y && 'field' in layer.encoding.y) {
          layer.encoding.y.axis = { grid: true };
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitIncreaseDataPointWidth(command: IncreaseDataPointWidth): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    if (
      'mark' in unit &&
      typeof unit.mark === 'object' &&
      'type' in unit.mark
    ) {
      if (unit.mark.type === 'bar') {
        unit.mark.width = { band: 1.1 };
      } else if (unit.mark.type === 'line') {
        unit.encoding = { ...(unit.encoding ?? {}), strokeWidth: { value: 4 } };
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitDecreaseDataPointWidth(command: DecreaseDataPointWidth): void {
    if ('mark' in this._spec) {
      if (
        'mark' in this._spec &&
        typeof this._spec.mark === 'object' &&
        'type' in this._spec.mark &&
        this._spec.mark.type === 'bar'
      ) {
        this._spec.mark.width = { band: 0.7 };
      }
    } else if ('layer' in this._spec) {
      for (const layer of this._spec.layer) {
        if (
          'mark' in layer &&
          typeof layer.mark === 'object' &&
          'type' in layer.mark &&
          layer.mark.type === 'bar'
        ) {
          layer.mark.width = { band: 0.5 };
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitIncreaseHeight(command: IncreaseHeight): void {
    if ('mark' in this._spec) {
      this._spec.height = 500;
    }
  }

  visitDecreaseHeight(command: DecreaseHeight): void {
    if ('mark' in this._spec) {
      this._spec.height = command.height;
    } else if ('layer' in this._spec) {
      this._spec.height = command.height;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitIncreaseWidth(command: IncreaseWidth): void {
    this.setWidth(500);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitDecreaseWidth(command: DecreaseWidth): void {
    this.setWidth(300);
  }

  visitBindX(command: BindX): void {
    const unit = getUnitSpec(this._spec);

    if (!unit) {
      return;
    }

    if (!unit.encoding) return;

    const bindY = this.getY(unit);
    let width = 300;
    const height =
      'height' in this._spec && typeof this._spec.height === 'number'
        ? bindY
          ? Math.max(230, this._spec.height)
          : Defaults.minHeight
        : 240;
    const columns = this._dataProvider.columns.filter(
      (x) => x.name === command.field.name
    );
    if (
      columns.length > 0 &&
      !columns[0].defaultAggregate &&
      columns[0].dataType !== 'datetime' &&
      columns[0].distinctValuesCount > 0
    ) {
      width = Math.min(
        600,
        200 + Math.max(10, columns[0].distinctValuesCount) * 20
      );
    }

    if ('width' in this._spec && this._spec.width) {
      this._spec.width = width;
    }

    if ('height' in this._spec && this._spec.height) {
      this._spec.height = height;
    }

    const type = this.getScaleType({
      field: command.field,
      aggregate: command.aggr,
    });
    const x: PositionDef<Field> = {
      field: command.field.name,
      type,
      axis: {
        labelLimit: type === 'ordinal' ? 50 : undefined,
        labelAngle: type === 'ordinal' ? 30 : undefined,
        labelOffset: -10,
        // labelOverlap: "greedy"
      },
    };

    unit.encoding = { ...(unit.encoding ?? {}), x };

    if (unit.transform) {
      for (const t of unit.transform) {
        if (
          'groupby' in t &&
          t.groupby &&
          !t.groupby.includes(command.field.name)
        ) {
          t.groupby.push(command.field.name);
        }
      }
    }

    if (command.secondary) {
      if (!this.getY(unit)) {
        const y: PositionDef<Field> = {
          field: command.secondary.name,
        };
        unit.encoding = { ...(unit.encoding ?? {}), y };
        this.setHeight(300);
        if (this.autoMarkType) {
          unit.mark = { type: 'square' };
        }
      } else {
        const color: PositionDef<Field> = {
          field: command.secondary.name,
        };
        unit.encoding = { ...(unit.encoding ?? {}), color };
      }

      // add to transform
      if (unit.transform) {
        for (const t of unit.transform) {
          if (
            'groupby' in t &&
            t.groupby &&
            !t.groupby.includes(command.secondary.name)
          ) {
            t.groupby.push(command.secondary.name);
          }
        }
      }
    }
  }

  visitBindY(command: BindY): void {
    if (!command.field) {
      return;
    }

    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    const bindX = this.getX(unit);
    const height = bindX ? 250 : 150;

    if ('height' in this._spec && this._spec.height) {
      this._spec.height = height;
    }

    if (
      unit.encoding &&
      unit.encoding.x &&
      'field' in unit.encoding.x &&
      typeof unit.encoding.x.field === 'string' &&
      command.field.name === unit.encoding.x.field &&
      command.secondary
    ) {
      command.field = command.secondary;
      command.aggr = command.secondaryAggr;

      command.secondary = undefined;
      command.secondaryAggr = undefined;
    }

    const x = this.getX(unit);
    let field = command.field.name;
    let aggregate = command.aggr;
    if (!aggregate && x && x.type === 'temporal') {
      // apply default aggregate
      aggregate = command.field.defaultAggregate;
    }

    const type = this.getScaleType({
      field: command.field,
      aggregate,
    });

    const groupby = new Array<string>();
    if (unit.encoding) {
      if (
        unit.encoding.x &&
        'field' in unit.encoding.x &&
        typeof unit.encoding.x.field === 'string'
      ) {
        groupby.push(unit.encoding.x.field);
      }

      if (
        unit.encoding.color &&
        'field' in unit.encoding.color &&
        typeof unit.encoding.color.field === 'string'
      ) {
        groupby.push(unit.encoding.color.field);
      }
    }

    const transform: Transform[] = [];
    if (aggregate) {
      if (field === '*') {
        transform.push({
          aggregate: [
            {
              op: aggregate,
              as: aggregate + ' of rows',
            },
          ],
          groupby,
        });
        field = aggregate + ' of rows';
      } else {
        transform.push({
          aggregate: [
            {
              op: aggregate,
              field,
              as: aggregate + ' of ' + field,
            },
          ],
          groupby,
        });
        field = aggregate + ' of ' + field;
      }
    }

    const unitSpec = getUnitSpec(this._spec);
    if (!unitSpec) {
      console.log('failed to get unit spec');
      return;
    }

    if (unitSpec.encoding) {
      unitSpec.encoding.y = { field, type };
    } else {
      unitSpec.encoding = { y: { field, type } };
    }

    if (unitSpec.encoding) {
      if (!('color' in unitSpec.encoding)) {
        unitSpec.encoding.color = { value: '#418ded' };
      }
    }

    if (unitSpec.transform) {
      unitSpec.transform = [
        ...unitSpec.transform.filter((x) => !('aggregate' in x)),
        ...transform,
      ];
    } else {
      unitSpec.transform = transform;
    }

    if (this.autoMarkType && typeof unitSpec.mark === 'object') {
      unitSpec.mark.type = this.isTemporal()
        ? 'line'
        : aggregate
        ? 'bar'
        : 'tick';
    }

    if (unitSpec.encoding && !unitSpec.encoding.x && command.secondary) {
      unitSpec.encoding.x = {
        field: command.secondary.name,
        type: this.getScaleType({ field: command.secondary }),
      };
    }

    if (
      this.autoMarkType &&
      typeof unit.mark === 'object' &&
      'type' in unit.mark &&
      unit.encoding &&
      unit.encoding.x &&
      unit.encoding.y &&
      (!unit.transform || unit.transform.length === 0)
    ) {
      unit.mark = 'circle';
    }
  }

  private isTemporal() {
    if ('mark' in this._spec)
      return (
        this._spec.encoding?.x &&
        typeof this._spec.encoding.x === 'object' &&
        'type' in this._spec.encoding.x &&
        this._spec.encoding.x.type === 'temporal'
      );

    return (
      'layer' in this._spec &&
      this._spec.layer.length > 0 &&
      this._spec.layer[0].encoding?.x &&
      typeof this._spec.layer[0].encoding.x === 'object' &&
      'type' in this._spec.layer[0].encoding.x &&
      this._spec.layer[0].encoding.x.type === 'temporal'
    );
  }

  visitChangeAggregation(command: ChangeAggregation): void {
    if ('mark' in this._spec) {
      changeAggregate(this._spec, command.aggregate);
    }

    if ('layer' in this._spec) {
      if (this._spec.layer.length > 0) {
        const layer = this._spec.layer[0];
        if ('mark' in layer) {
          changeAggregate(layer, command.aggregate);
        }
      }
    }
  }

  visitSetChartType(command: SetChartType): void {
    const innerRadius = command.chart.innerRadius;
    const markType = command.chart.markType;
    const bin = command.chart.bin === true;

    if (bin) {
      this.setHeight(Defaults.defaultHistogramHeight);
      this.setWidth(Defaults.defaultHistogramWidth);
    }

    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    const x = this.getX(unit);
    const y = this.getY(unit);
    const aggrTransforms = this.getAggregateTransforms(unit);

    const isAggregated =
      y && typeof y.field === 'string' && aggrTransforms.has(y.field);

    if (
      command.chart.implictAggregation &&
      !isAggregated &&
      y &&
      !y.aggregate &&
      'field' in y &&
      typeof y.field === 'string'
    ) {
      let yFieldName = y.field;
      const aggregateTransforms = this.getAggregateTransforms(unit);
      if (aggregateTransforms.has(yFieldName)) {
        const f = aggregateTransforms.get(yFieldName);
        if (f) yFieldName = f.field.name;
      }
      const field = this._dataProvider.getField(yFieldName);
      this.visitBindY({ type: 'BindY', field, aggr: field.defaultAggregate });
    }

    if (bin) {
      if (x) {
        x.bin = true;
        x.type = undefined;
      } else if (y) {
        unit.encoding = {
          ...(unit.encoding ?? {}),
          x: { field: y.field, bin: true },
          y: { aggregate: 'count' },
        };
      }
    }


    unit.mark = {
      type: markType,
      innerRadius,
    };

    if (unit.encoding && unit.encoding.y) {
      if (markType === 'arc') {
        // pie chart
        if (
          unit.encoding.x &&
          'field' in unit.encoding.x &&
          typeof unit.encoding.x.field === 'string'
        ) {
          unit.encoding = {
            color: {
              field: unit.encoding.x.field,
              type: 'nominal',
            },
            theta: unit.encoding.y,
          };
        } else {
          unit.encoding = {
            theta: unit.encoding.y,
          };
        }
      }
    } else if (unit.encoding && unit.encoding.x && 'field' in unit.encoding.x) {
      if (markType === 'arc') {
        unit.encoding = {
          color: {
            field: unit.encoding.x.field,
            type: 'nominal',
          },
        };
      }
    }

    if (command.chart.swapAxis) {
      this.visitSwapAxis({ type: 'SwapAxis' });
    }

    this.autoMarkType = false;
  }

  visitAddLine(command: AddLine): void {
    const y = { datum: command.value };
    const stroke = { value: command.color };

    this.convertToLayerSpec();

    if (!('layer' in this._spec)) return;

    this._spec.layer.push({
      data: {
        values: [{}],
      },
      encoding: { y, stroke },
      layer: [
        {
          mark: 'rule',
        },
      ],
    });
  }

  visitSetColor(command: SetColor): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    switch (command.target) {
      case 'DataPoint':
        if (unit.encoding) {
          unit.encoding.color = { value: command.color };
        }
        break;

      case 'Background':
        this._spec.background = command.color;
        break;
    }
  }

  visitBindSeries(command: BindSeries): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;
    const x = this.getX(unit);
    if (!x) {
      this.visitBindX({ type: 'BindX', field: command.field });
      return;
    }

    if (unit.encoding) {
      unit.encoding.color = { field: command.field.name };
    }
    if (unit.transform) {
      for (const t of unit.transform) {
        if ('aggregate' in t && t.groupby) {
          if (!t.groupby.includes(command.field.name)) {
            t.groupby.push(command.field.name);
          }
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitSwapAxis(_: SwapAxis): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;
    const y = this.getX(unit);

    // Avoid rotate axis label for Y axis.
    if (y && y.axis && y.axis.labelAngle) {
      y.axis.labelAngle = undefined;
      y.axis.labelOffset = undefined;
      y.axis.labelLimit = undefined;
    }

    const x = this.getY(unit);
    unit.encoding = { ...(unit.encoding ?? {}), x, y };
  }

  visitAddTrendLine(command: AddTrendLine): void {
    const { range } = command;

    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    // add default line chart
    if (
      unit.encoding &&
      unit.encoding.x &&
      'field' in unit.encoding.x &&
      unit.encoding.x.type !== 'temporal'
    ) {
      // remove none temporal x axis
      unit.encoding.x = undefined;
      if (!unit.encoding.y) {
        unit.encoding = undefined;
      }
    }

    if (!unit.encoding) {
      const dateFields = this._dataProvider.columns.filter(
        (x) => x.dataType === 'datetime'
      );
      const measures = this._dataProvider.columns.filter(
        (x) => x.defaultAggregate
      );
      if (dateFields.length === 0 || measures.length === 0) {
        console.log('no time/measure field');
        return;
      }

      this.visitBindX({ type: 'BindX', field: dateFields[0] });
      this.visitBindY({
        type: 'BindY',
        field: measures[0],
        aggr: measures[0].defaultAggregate,
      });
    } else if (!unit.encoding.x) {
      const dateFields = this._dataProvider.columns.filter(
        (x) => x.dataType === 'datetime'
      );
      if (dateFields.length === 0) {
        console.log('no time field');
        return;
      }
      this.visitBindX({ type: 'BindX', field: dateFields[0] });
    } else if (!unit.encoding.y) {
      const measures = this._dataProvider.columns.filter(
        (x) => x.defaultAggregate
      );
      if (measures.length === 0) {
        console.log('no measure field');
        return;
      }
      this.visitBindY({
        type: 'BindY',
        field: measures[0],
        aggr: measures[0].defaultAggregate,
      });
    }

    if (typeof unit.mark === 'object' && unit.mark.type !== 'line') {
      this.visitSetChartType({
        type: 'SetChartType',
        chart: {
          type: 'chart',
          markType: 'line',
          swapAxis: false,
          isClustered: false,
          implictAggregation: true,
        },
      });
    }

    this.convertToLayerSpec();

    if (!('layer' in this._spec) || this._spec.layer.length === 0) return;

    const layer = this._spec.layer[0];

    const trendlineTransform: Transform[] = [];
    if (layer.transform) {
      for (const t of layer.transform) {
        trendlineTransform.push(t);
      }
    }

    const xField = getXField(this._spec);
    if (xField.length === 0) return;

    if (range && range.from) {
      trendlineTransform.push({
        filter: {
          timeUnit: range.fromTimeUnit,
          field: xField[0],
          gte: range.from,
        },
      });
    }

    if (range && range.to) {
      trendlineTransform.push({
        filter: {
          timeUnit: range.toTimeUnit,
          field: xField[0],
          lt: range.to,
        },
      });
    }

    if (
      !(
        layer.encoding &&
        layer.encoding.x &&
        'field' in layer.encoding.x &&
        layer.encoding.y &&
        'field' in layer.encoding.y &&
        typeof layer.encoding.x.field === 'string' &&
        typeof layer.encoding.y.field === 'string'
      )
    )
      return;

    trendlineTransform.push({
      regression: layer.encoding.y.field,
      on: layer.encoding.x.field,
    });

    this._spec.layer.push({
      mark: {
        type: 'line',
        color: command.color,
      },
      transform: trendlineTransform,
      encoding: {
        x: {
          field: layer.encoding.x.field,
          type: 'temporal',
        },
        y: {
          field: layer.encoding.y.field,
          type: 'quantitative',
        },
        strokeWidth: {
          value: 2,
        },
        strokeDash: {
          value: [6, 2],
        },
      },
    });
  }

  private convertToLayerSpec() {
    if ('mark' in this._spec) {
      this._spec = {
        data: this._data,
        autosize: {
          type: 'fit',
          contains: 'padding',
        },
        width: this._spec.width,
        height: this._spec.height,
        layer: [
          {
            mark: this._spec.mark,
            encoding: this._spec.encoding,
            transform: this._spec.transform,
          },
        ],
        usermeta: this._spec.usermeta,
      };
    }
  }

  visitSetMark(command: SetMark): void {
    const markType = command.markType;
    const customShape = command.customShape;
    const markFilled = command.markFilled;
    const shape = command.shape ?? null;
    const autoMarkType = false;

    if ('mark' in this._spec) {
      if (typeof this._spec.mark === 'object' && 'type' in this._spec.mark) {
        this._spec.mark.type = markType;
      } else if (typeof this._spec.mark === 'string') {
        this._spec.mark = { type: markType };
      }
    }

    if ('layer' in this._spec && this._spec.layer.length > 0) {
      const layer = this._spec.layer[0];
      if (
        'mark' in layer &&
        typeof layer.mark === 'object' &&
        'type' in layer.mark
      ) {
        layer.mark.type = markType;
      }
    }
  }

  visitSort(sort: Sort): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    if (unit.encoding) {
      if (sort.field) {
        if (
          unit.encoding.x &&
          'field' in unit.encoding.x &&
          unit.encoding.x.field === sort.field.name
        ) {
          unit.encoding.x.sort =
            sort.direction == 'asc' ? 'ascending' : 'descending';
          return;
        }

        if (
          unit.encoding.y &&
          'field' in unit.encoding.y &&
          unit.encoding.y.field === sort.field.name
        ) {
          unit.encoding.y.sort =
            sort.direction == 'asc' ? 'ascending' : 'descending';
          return;
        }
      }
      if (
        unit.encoding.x &&
        typeof unit.encoding.x === 'object' &&
        'field' in unit.encoding.x
      ) {
        unit.encoding.x.sort = sort.direction === 'asc' ? 'y' : '-y';
      }
    }
  }

  visitAddRectangle(commmand: AddRectangle): void {
    this.convertToLayerSpec();

    if ('layer' in this._spec) {
      if (commmand.timeRange) {
        const from = new Date(Date.parse(commmand.timeRange.from));
        const to = new Date(Date.parse(commmand.timeRange.to));
        this._spec.layer = [
          {
            mark: 'rect',
            encoding: {
              x: {
                datum: {
                  year: from.getFullYear(),
                },
              },
              x2: {
                datum: {
                  year: to.getFullYear(),
                },
              },
              color: { value: commmand.color },
              opacity: { value: 0.2 },
            },
          },
          ...this._spec.layer,
        ];
      } else if (commmand.yRange) {
        this._spec.layer = [
          {
            mark: 'rect',
            encoding: {
              y: { datum: commmand.yRange.from },
              y2: { datum: commmand.yRange.to },
              color: { value: commmand.color },
              opacity: { value: 0.2 },
            },
          },
          ...this._spec.layer,
        ];
      }
    }
  }

  visitHighlight(commmand: Highlight): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    if (!unit.encoding || !unit.encoding.y) {
      const measures = this._dataProvider.columns.filter(
        (x) => x.defaultAggregate
      );
      if (measures.length === 0) {
        console.log('no time/measure field');
        return;
      }

      if (
        unit.encoding &&
        unit.encoding.x &&
        'field' in unit.encoding.x &&
        unit.encoding.x.field === measures[0].name
      ) {
        this.visitBindY({
          type: 'BindY',
          field: ColumnStar,
          aggr: 'count',
        });
      } else {
        this.visitBindY({
          type: 'BindY',
          field: measures[0],
          aggr: measures[0].defaultAggregate,
        });
      }
    }

    this.convertToLayerSpec();
    if (commmand.values) {
      for (const value of commmand.values) {
        if (!('layer' in this._spec) || this._spec.layer.length === 0) return;

        if (this._spec.layer.length > 0) {
          const layer = this._spec.layer[0];
          if (
            'mark' in layer &&
            layer.encoding &&
            layer.encoding.x &&
            'field' in layer.encoding.x &&
            layer.encoding.y &&
            'field' in layer.encoding.y
          ) {
            const filter = `datum['${value.key.name}'] == '${value.value}'`;
            const transform: Transform[] = [{ filter }];
            if (layer.transform) {
              for (const t of layer.transform) {
                transform.push(t);
              }
            }

            const highlightLayer: UnitSpec<string> = {
              mark: layer.mark,
              transform,
              encoding: {
                x: layer.encoding.x,
                y: layer.encoding.y,
                color: { value: commmand.color },
              },
            };
            this._spec.layer.push(highlightLayer);
          }
          // const category = layer.;
          // const value = this.bindY[0].field.name;
          // const aggregate = 'sum';
          // const highlightLayer: UnitSpec<string> = this.createHighlightLayer(
          //   highlight,
          //   category.field,
          //   value,
          //   aggregate,
          //   this.swapAxis
          // );
          // layer1.push(highlightLayer);
        }
      }
    }
    if (commmand.topN !== undefined) {
      if (!('layer' in this._spec) || this._spec.layer.length === 0) return;

      if (this._spec.layer.length > 0) {
        const layer = this._spec.layer[0];
        if (
          layer.encoding &&
          layer.encoding.y &&
          'field' in layer.encoding.y &&
          layer.encoding.y.field &&
          typeof layer.encoding.y.field === 'string'
        ) {
          const field = layer.encoding.y.field;
          const transform: Transform = {
            window: [{ op: 'rank', as: '$rank' }],
            sort: [{ field, order: 'descending' }],
          };

          if (layer.transform) {
            layer.transform.push(transform);
          } else {
            layer.transform = [transform];
          }
          layer.encoding.color = {
            condition: {
              test: 'datum.$rank <= ' + commmand.topN,
              value: commmand.color,
            },
            value: '#418ded',
          };
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  visitAddSeries(command: AddSeries): void {
    // todo
  }

  visitRemoveSeries(command: RemoveSeries): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    const filters = clone(command.filters);
    for (const filter of filters) {
      filter.operator = '!=';
    }

    this.visitFilter({ type: 'Filter', filters });
  }

  visitRemoveDataPoints(command: RemoveDataPoints): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    const filters = clone(command.filters);
    for (const filter of filters) {
      filter.operator = '!=';
    }

    this.visitFilter({ type: 'Filter', filters });
  }

  visitRepeat(command: Repeat): void {
    this.convertToLayerSpec();

    if (!('layer' in this._spec) || this._spec.layer.length === 0) return;

    if (this._spec.layer.length > 0) {
      const layer = this._spec.layer[0];
      if (
        'mark' in layer &&
        layer.encoding &&
        'x' in layer.encoding &&
        'y' in layer.encoding &&
        layer.encoding.x &&
        layer.encoding.y &&
        'field' in layer.encoding.x &&
        'field' in layer.encoding.y &&
        typeof layer.encoding.x.field === 'string' &&
        typeof layer.encoding.y.field === 'string'
      ) {
        const transform = layer.transform;
        if (transform) {
          for (const t of transform) {
            if ('groupby' in t && t.groupby) {
              if (!t.groupby.includes(command.field)) {
                t.groupby.push(command.field);
              }
            }
          }
        }
        this._spec = {
          mark: layer.mark,
          data: this._data,
          height: this._spec.height,
          width: this._spec.width,
          autosize: {
            type: 'fit',
            contains: 'padding',
          },
          transform,
          encoding: {
            x: layer.encoding.x,
            y: layer.encoding.y,
            row: {
              field: command.field,
            },
          },
          usermeta: this._spec.usermeta,
        };
      }
    }
  }

  visitFilter(command: Filter): void {
    const unit = getUnitSpec(this._spec);
    if (!unit) return;

    const filterTransform = this.buildFilterTransform(command.filters);
    if (filterTransform) {
      const transform = [...filterTransform, ...(this._spec.transform ?? [])];

      const having = transform.filter(
        (x) =>
          'filter' in x &&
          x.filter &&
          typeof x.filter === 'object' &&
          'field' in x.filter &&
          x.filter.field.includes(' of ')
      );

      const where = transform.filter(
        (x) => 'filter' in x && !having.includes(x)
      );

      const others = transform.filter((x) => !('filter' in x));

      const mergedWhere = new Array<Transform>();

      const additionlFields = new Array<string>();
      for (const t of where) {
        if (mergedWhere.length === 0) {
          mergedWhere.push(t);
          continue;
        }

        const prev = mergedWhere[mergedWhere.length - 1];
        if (
          'filter' in prev &&
          typeof prev.filter === 'object' &&
          'field' in prev.filter &&
          'filter' in t &&
          typeof t.filter === 'object' &&
          'field' in t.filter &&
          'equal' in prev.filter &&
          'equal' in t.filter &&
          typeof prev.filter.equal === 'string' &&
          typeof t.filter.equal === 'string'
        ) {
          prev.filter = {
            field: prev.filter.field,
            oneOf: [prev.filter.equal, t.filter.equal],
          };
          additionlFields.push(t.filter.field);
        } else {
          mergedWhere.push(t);
        }
      }

      if (additionlFields.length > 0 && unit.encoding && !unit.encoding.color) {
        const field = additionlFields[0];
        unit.encoding.color = { field };
        for (const t of others) {
          if ('groupby' in t && t.groupby && !t.groupby.includes(field)) {
            t.groupby.push(field);
          }
        }
      }

      unit.transform = [...mergedWhere, ...others, ...having];
    }
  }

  public build(data: { values: object[] } | { name: string }): TopLevelSpec {
    this._data = data;

    this._spec = this.createInitSpec();

    this.reducer(this._interpretations);

    // post fix
    const unit = getUnitSpec(this._spec);
    if (unit) {
      if (
        unit.encoding &&
        unit.encoding.x &&
        unit.encoding.y &&
        'field' in unit.encoding.x &&
        'field' in unit.encoding.y
      ) {
        const x = unit.encoding.x;
        const y = unit.encoding.y;
        if (isEqual(x.field, y.field)) {
          const field = this._dataProvider.columns.filter(
            (c) => c.name === x.field
          );
          if (field.length > 0 && field[0].defaultAggregate) {
            unit.encoding.x = undefined;
          } else {
            unit.encoding.y = undefined;
          }
        }
      }
    }

    return this._spec;
  }

  buildFilterTransform(filters: FilterItem[]): Transform[] | undefined {
    if (filters.length === 0) return undefined;
    const transform: Transform[] = [];
    for (let i = 0; i < filters.length; i++) {
      const f = filters[i];
      if (f.isYear && f.target.type === 'number') {
        transform.push({
          filter: {
            field: f.subject.name,
            range: [{ year: f.target.value }, { year: f.target.value }],
          },
        });
        continue;
      }

      if (f.target.type === 'number') {
        let field = f.subject.name;
        if (f.aggregate) {
          field = f.aggregate + ' of ' + field;
        }
        switch (f.operator) {
          case '<=':
            transform.push({
              filter: {
                field,
                lte: f.target.value,
              },
            });
            break;
          case '<':
            transform.push({
              filter: {
                field,
                lt: f.target.value,
              },
            });
            break;
          case '>=':
            transform.push({
              filter: {
                field,
                gte: f.target.value,
              },
            });
            break;
          case '>':
            transform.push({
              filter: {
                field,
                gt: f.target.value,
              },
            });
            break;
          case '=':
            transform.push({
              filter: {
                field,
                equal: f.target.value,
              },
            });
            break;
          default:
            console.log('unknown operator ' + f.operator);
            break;
        }
      } else if (f.target.type === 'string') {
        switch (f.operator) {
          case '=':
            transform.push({
              filter: {
                field: f.subject.name,
                equal: f.target.value,
              },
            });
            break;

          case '!=':
            transform.push({
              filter: {
                not: {
                  field: f.subject.name,
                  equal: f.target.value,
                },
              },
            });
            break;

          default:
            console.log('unknown operator ' + f.operator);
            break;
        }
      } else if (f.target.type === 'datetime') {
        switch (f.operator) {
          case '<=':
            transform.push({
              filter: {
                timeUnit: 'year',
                field: f.subject.name,
                lte: f.target.value,
              },
            });
            break;
          case '<':
            transform.push({
              filter: {
                timeUnit: 'year',
                field: f.subject.name,
                lt: f.target.value,
              },
            });
            break;
          case '>=':
            transform.push({
              filter: {
                timeUnit: 'year',
                field: f.subject.name,
                gte: f.target.value,
              },
            });
            break;

          case '>':
            transform.push({
              filter: {
                timeUnit: 'year',
                field: f.subject.name,
                gt: f.target.value,
              },
            });
            break;
          case '=':
            transform.push({
              filter: {
                timeUnit: 'year',
                field: f.subject.name,
                equal: f.target.value,
              },
            });
            break;
          default:
            console.error('unknown filter op ' + f.operator);
            break;
        }
      } else {
        console.log('Not implemented filter ' + JSON.stringify(filters[i]));
      }
    }

    return transform;
  }

  getScaleType(aggr: Aggregation): StandardType {
    if (aggr && aggr.field) {
      if (aggr.aggregate) return 'quantitative';

      if (aggr.field.dataType === 'datetime') {
        return 'temporal';
      }

      if (aggr.field.defaultAggregate === undefined) {
        return 'ordinal';
      }

      if (aggr.field.dataType === 'number') {
        return 'quantitative';
      }
    }

    return 'ordinal';
  }

  getTimeUnit(col: Column): TimeUnit | undefined {
    if (col.dataType === 'datetime' && col.dataCategory === 'years') {
      return 'yearmonth';
    }

    return undefined;
  }

  private setWidth(width: number) {
    if ('width' in this._spec) {
      this._spec.width = width;
    }
  }

  private setHeight(height: number) {
    if ('height' in this._spec) {
      this._spec.height = height;
    }
  }

  private getX(
    unit: TopLevelUnitSpec<Field> | UnitSpec<Field>
  ): PositionFieldDef<Field> | undefined {
    if (unit.encoding && unit.encoding.x && 'field' in unit.encoding.x) {
      return unit.encoding.x;
    }
    return undefined;
  }

  private getY(
    unit: TopLevelUnitSpec<Field> | UnitSpec<Field>
  ): PositionFieldDef<Field> | undefined {
    if (unit.encoding && unit.encoding.y && 'field' in unit.encoding.y) {
      return unit.encoding.y;
    }
    return undefined;
  }

  private getAggregateTransforms(
    unit: TopLevelUnitSpec<Field> | UnitSpec<Field>
  ): Map<string, AggregateEntity> {
    const entities = new Map<string, AggregateEntity>();
    if (!unit.transform) return entities;

    for (const transform of unit.transform) {
      if ('aggregate' in transform) {
        for (const aggregate of transform.aggregate) {
          if (aggregate.field && aggregate.op) {
            entities.set(aggregate.as, {
              type: 'aggr',
              field: this._dataProvider.getField(aggregate.field),
              aggregate: this.convertAggregate(aggregate.op),
            });
          }
        }
      }
    }

    return entities;
  }

  private convertAggregate(op: AggregateOp): AggregationType {
    switch (op) {
      case 'average':
        return 'mean';
      case 'count':
        return 'count';
      case 'distinct':
        return 'distinct';
      case 'min':
        return 'min';
      case 'max':
        return 'max';
      case 'sum':
        return 'sum';
      default:
        return 'sum';
    }
  }
}

function getRank(type: string): number {
  switch (type) {
    case 'BindX':
      return 0;

    case 'BindY':
      return 1;

    default:
      return 3;
  }
}

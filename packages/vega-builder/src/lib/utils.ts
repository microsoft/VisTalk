// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { AggregationType } from '@vis-talk/interpreter';
import { Field } from 'vega-lite/build/src/channeldef';
import { TopLevelSpec } from 'vega-lite/build/src/spec';
import { TopLevelUnitSpec, UnitSpec } from 'vega-lite/build/src/spec/unit';

/**
 * Get unit spec.
 *
 * @export
 * @param {TopLevelSpec} spec
 * @return {*}  {(TopLevelUnitSpec<Field> | UnitSpec<Field> | undefined)}
 */
export function getUnitSpec(
  spec: TopLevelSpec
): TopLevelUnitSpec<Field> | UnitSpec<Field> | undefined {
  if ('mark' in spec) {
    return spec;
  }

  if ('layer' in spec && spec.layer.length > 0) {
    const layer = spec.layer[0];
    if ('mark' in layer) {
      return layer;
    }
  }

  return undefined;
}

/**
 * Get X encoding fields.
 *
 * @export
 * @param {TopLevelSpec} spec
 * @return {*}  {string[]}
 */
export function getXField(spec: TopLevelSpec): string[] {
  if ('mark' in spec) {
    return getXFieldUnitSpec(spec);
  }

  if ('layer' in spec && spec.layer.length > 0) {
    const layer = spec.layer[0];
    if ('mark' in layer) {
        return getXFieldUnitSpec(layer);
    }
  }

  return [];
}

/**
 * Get x encoding spec.
 *
 * @export
 * @param {(TopLevelUnitSpec<Field> | UnitSpec<Field>)} spec
 * @return {*}  {string[]}
 */
export function getXFieldUnitSpec(
  spec: TopLevelUnitSpec<Field> | UnitSpec<Field>
): string[] {
  const fields = new Array<string>();
  if (
    spec.encoding &&
    spec.encoding.x &&
    'field' in spec.encoding.x &&
    typeof spec.encoding.x.field === 'string'
  ) {
    fields.push(spec.encoding.x.field);
  }
  return fields;
}

/**
 * Change aggregation method.
 *
 * @export
 * @param {(TopLevelUnitSpec<Field> | UnitSpec<Field>)} spec
 * @param {AggregationType} aggr
 * @return {*} 
 */
export function changeAggregate(
  spec: TopLevelUnitSpec<Field> | UnitSpec<Field>,
  aggr: AggregationType
) {
  if (!spec.encoding?.y) return spec;

  if (!('field' in spec.encoding.y)) return spec;

  const y = spec.encoding.y.field;
  if (!(typeof y === 'string')) return spec;

  const groupby = new Array<string>();
  if (
    spec.encoding.x &&
    'field' in spec.encoding.x &&
    typeof spec.encoding.x.field === 'string'
  )
    groupby.push(spec.encoding.x.field);

  if (spec.transform) {
    for (const aggregate of spec.transform) {
      if ('aggregate' in aggregate) {
        for (const a of aggregate.aggregate) {
          a.op = aggr;
        }
      }
    }
  } else {
    spec.transform = [
      {
        aggregate: [
          {
            op: aggr,
            field: y,
            as: aggr + ' of ' + y,
          },
        ],
        groupby,
      },
    ];
  }

  return spec;
}

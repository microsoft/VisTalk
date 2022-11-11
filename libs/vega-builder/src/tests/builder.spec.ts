// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { setBackend } from '@tensorflow/tfjs';
import { at } from 'lodash';
import { createBuilder } from '../lib/builder';

setBackend('cpu');

const carSales = [
  {
    Year: '1/1/2007',
    Brand: 'Ford',
    Category: 'Compact',
    Model: 'Focus',
    Sales: '4.00',
  },
  {
    Year: '1/1/2007',
    Brand: 'BMW',
    Category: 'Compact',
    Model: 'BMW 3-Series',
    Sales: '3.00',
  },
  {
    Year: '1/1/2007',
    Brand: 'Toyota',
    Category: 'SUV',
    Model: 'RAV 4',
    Sales: '2.00',
  },
  {
    Year: '1/1/2007',
    Brand: 'Honda',
    Category: 'Smallsize',
    Model: 'Fit',
    Sales: '5.00',
  },
];

const session = createBuilder(carSales);
describe('session', () => {
  it('sales', () => {
    const spec = session.setInput(['sales']).build();
    const actual = at(spec as any, [
      'mark.type',
      'encoding.y.field',
      'encoding.y.type',
    ]);
    expect(actual).toEqual(['tick', 'Sales', 'quantitative']);
  });

  it('total sales', () => {
    const spec = session.setInput(['total sales']).build();
    const actual = at(spec as any, [
      'encoding.y.field',
      'transform[0].aggregate[0].op',
    ]);
    expect(actual).toEqual(['sum of Sales', 'sum']);
  });

  it('total sales by brand as donut chart', () => {
    const spec = session.setInput(['total sales by brand as donut chart']).build();
    const actual = at(spec as any, [
      'mark.type',
      'mark.innerRadius',
    ]);
    expect(actual).toEqual(['arc', 40]);
  });

  it('average of sales', () => {
    const spec = session.setInput(['average of sales']).build();
    const actual = at(spec as any, [
      'encoding.y.field',
      'transform[0].aggregate[0].op',
    ]);
    expect(actual).toEqual(['mean of Sales', 'mean']);
  });

  it('max sales', () => {
    const spec = session.setInput(['max sales']).build();
    const actual = at(spec as any, [
      'encoding.y.field',
      'transform[0].aggregate[0].op',
    ]);
    expect(actual).toEqual(['max of Sales', 'max']);
  });

  it('brand,remove ford', () => {
    const spec = session.setInput(['brand', 'remove ford']).build();
    const actual = at(spec as any, ['transform[0]']);
    expect(actual).toEqual([
      {
        filter: { not: { field: 'Brand', equal: 'Ford' } },
      },
    ]);
  });

  it('brand,remove ford, bmw, remove toyota', () => {
    const spec = session
      .setInput(['brand', 'remove ford, bmw', 'remove toyota'])
      .build();
    const actual = at(spec as any, [
      'transform[0]',
      'transform[1]',
      'transform[2]',
    ]);
    expect(actual).toEqual([
      {
        filter: { not: { field: 'Brand', equal: 'Toyota' } },
      },
      {
        filter: { not: { field: 'Brand', equal: 'Ford' } },
      },
      {
        filter: { not: { field: 'Brand', equal: 'BMW' } },
      },
    ]);
  });

  it('bind color', () => {
    const spec = session
      .setInput(['total sales by category', 'bind color to brand'])
      .build();
    const actual = at(spec as any, ['encoding.color.field']);
    expect(actual).toEqual(['Brand']);
  });

  it('trend', () => {
    const spec = session.setInput(['trend']).build();
    const actual = at(spec as any, [
      'layer[0].mark.type',
      'layer[0].encoding.x.field',
    ]);
    expect(actual).toEqual(['line', 'Year']);
  });

  it('show trend of sales', () => {
    const spec = session.setInput(['show trend of sales']).build();
    const actual = at(spec as any, [
      'layer[0].mark.type',
      'layer[0].encoding.x.field',
    ]);
    expect(actual).toEqual(['line', 'Year']);
  });

  it('sales trend', () => {
    const spec = session.setInput(['sales trend']).build();
    const actual = at(spec as any, [
      'layer[0].mark.type',
      'layer[0].encoding.x.field',
    ]);
    expect(actual).toEqual(['line', 'Year']);
  });
});

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { createBuilder } from "../lib/builder";

const carSales = [
  {
    Year: '1/1/2007',
    Brand: 'BrandA',
    Category: 'Compact',
    Model: 'BMW 3-Series',
    Sales: '142490.00',
  },
  {
    Year: '1/1/2007',
    Brand: 'BrandB',
    Category: 'SUV',
    Model: 'Focus',
    Sales: '54142.00',
  },
  {
    Year: '1/1/2007',
    Brand: 'BrandA',
    Category: 'Fullsize',
    Model: 'Yaris',
    Sales: '14773.00',
  },
];

const session = createBuilder(carSales);

describe('predict', () => {
  it('add title', () => {
    const { interpretations } = session.setInput(['add title "hello world!"']);
    const actual = interpretations[0].intents;
    expect(actual).toEqual(['AddChartTitle']);
  });

  it('sales', () => {
    const { interpretations } = session.setInput(['sales']);
    const actual = interpretations[0].intents;
    expect(actual).toEqual(['BindY']);
  });
  
  it('total sales', () => {
    const { interpretations } = session.setInput(['total sales']);
    const actual = interpretations[0].intents;
    expect(actual).toEqual(['BindY']);
  });
});

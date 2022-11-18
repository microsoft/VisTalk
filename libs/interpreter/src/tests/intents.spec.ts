// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { getBackend } from '@tensorflow/tfjs-node';
import { createDataProvider } from "../lib/data";
import { Interpreter } from "../lib/interpreter";
import { tokenize } from "../lib/tokenize";

const carSales = [
  {
    Year: '1/1/2007',
    Brand: 'BrandA',
    Category: 'Compact',
    Model: 'BrandA model',
    Sales: '100.00',
  },
  {
    Year: '1/1/2008',
    Brand: 'BrandB',
    Category: 'SUV',
    Model: 'BrandB model',
    Sales: '200.00',
  },
];

console.log(getBackend());

const interpreter = new Interpreter(createDataProvider(carSales));
const tests = [
  [
      "add a card sales",
      "BindY,SetChartType",
      "O O B-chart B-aggr",
  ],
  [
      "added a margin",
      "IncreaseMargin",
      "O O O",
  ],
  [
      "add a title",
      "AddChartTitle",
      "O O B-target",
  ],
  [
      "at the top of each bar write the absolute value",
      "AddDataLabels",
      "O O B-position O O B-target O O O O",
  ],
  [
      "add grid to both axis",
      "AddGridLines",
      "O B-target O O O",
  ],
  [
      "add dotted line at 100",
      "AddLine",
      "O O O O B-value",
  ],
  [
      "add rectangle from 100 to 200",
      "AddRectangle",
      "O O O B-greaterThanOrEqual O B-lessThanOrEqual",
  ],
  [
      "highlight top 2 in red",
      "Highlight",
      "O O B-top_n O B-color",
  ],
  [
      "add suv series in light blue",
      "AddSeries",
      "O B-filter O O B-color",
  ],
  [
      "add labels to show names",
      "AddSeriesLabels",
      "O O O O O",
  ],
  [
      "emphasize each categories in a different color",
      "BindSeries",
      "O O B-series O O O O",
  ],
  [
      "overlay a trend line",
      "AddTrendLine",
      "O O O O",
  ],
  [
      "assign categories with x axis",
      "BindX",
      "O B-field O O O",
  ],
  [
      "encode sales with y axis",
      "BindY",
      "O B-aggr O O O",
  ],
  [
      "sales by brand",
      "BindX,BindY",
      "B-aggr O B-field",
  ],
  [
      "distribution of sales",
      "BindX,SetChartType",
      "B-chart O B-aggr",
  ],
  [
      "create a column chart for sales break down by categories",
      "BindX,BindY,SetChartType",
      "O O B-chart I-chart O B-aggr O O O B-field",
  ],
  [
      "change mark to scatter chart .",
      "SetChartType",
      "O O O B-chart I-chart O",
  ],
  [
      "move the x axis from the left to the right hand side",
      "ChangePosition",
      "O O B-target I-target O O B-from O O B-position O O",
  ],
  [
      "set smaller data point width",
      "DecreaseDataPointWidth",
      "O O O O O",
  ],
  [
      "make the chart more congested",
      "DecreaseHeight",
      "O O O O O",
  ],
  [
      "can you lower the graph's width by 10%",
      "DecreaseWidth",
      "O O O O O O O O O O",
  ],
  [
      "filter the data where sales is 10k",
      "Filter",
      "O O O O B-subject O B-equal",
  ],
  [
      "emphasized variable in red",
      "HighlightOutlier",
      "O O O B-color",
  ],
  [
      "change color of bars below 0 to brown.",
      "HighlightNegative",
      "O O O O O O O B-color O",
  ],
  [
      "please make the data point larger",
      "IncreaseDataPointWidth",
      "O O O O O O",
  ],
  [
      "modify it to add more range for the sales",
      "IncreaseHeight",
      "O O O O O O O O B-aggr",
  ],
  [
      "please make the graph larger horizontally",
      "IncreaseWidth",
      "O O O O O O",
  ],
  [
      "change to sum",
      "ChangeAggregation",
      "O O B-aggregation",
  ],
  [
      "set name to \"new component\"",
      "NameComponent",
      "O O O B-name",
  ],
  [
      "can you remove variable in data",
      "RemoveAnomalyDataPoints",
      "O O O O O O",
  ],
  [
      "eliminate y axis entries",
      "RemoveYAxis",
      "O B-target I-target O",
  ],
  [
      "can you eliminate the brand not used",
      "RemoveBlankDataPoints",
      "O O O O B-field O O",
  ],
  [
      "erase the title of the chart.",
      "RemoveChartTitle",
      "O O B-target O O O O",
  ],
  [
      "except suv",
      "RemoveDataPoints",
      "O B-filter",
  ],
  [
      "hide the grid",
      "RemoveGridLines",
      "O O O",
  ],
  [
      "remove blue line from graph",
      "RemoveSeries",
      "O B-color O O O",
  ],
  [
      "repeat by categories",
      "Repeat",
      "O O B-field",
  ],
  [
      "change color to red",
      "SetColor",
      "O O O B-color",
  ],
  [
      "set mark rect",
      "SetMark",
      "O O B-mark",
  ],
  [
      "arrange them in 2 columns",
      "ShowColumns",
      "O O O B-number O",
  ],
  [
      "sort",
      "SortDefault",
      "O",
  ],
  [
      "arrange the bars from shortest to tallest of values",
      "SortAsc",
      "O O O O O O O O O",
  ],
  [
      "sort sales using descending order",
      "SortDesc",
      "O B-sorted O O O",
  ],
  [
      "exchanging x and y values",
      "SwapAxis",
      "O O O O O",
  ]
];

describe('interpreter predict intents', () => {
  test.each(tests)('input %p intent %p tags %p', (input, expectedIntents, expectedTags) => {
    const tokens = interpreter.dataProvider.binding(tokenize(input.toLowerCase()));
    const tokenIds = tokens.map((x) => interpreter.model.getWordId(x.term));
    const preds = interpreter.model.predict([tokenIds]);
    const actualIntents = preds[0].intents.join(',');
    const actualTags = preds[0].tags.join(' ');
    expect(actualIntents).toBe(expectedIntents);
    expect(actualTags).toBe(expectedTags);
  });
});

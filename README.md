<img src="https://microsoft.github.io/VisTalk/vistalk-icon.svg" width="64px" align="left" style="margin-right: 10px;" /> Vis Talk: A JavaScript toolkit for Natural Language-based Visualization Authoring
====

[![GitHub Actions CI](https://github.com/microsoft/VisTalk/workflows/CI/badge.svg)](https://github.com/microsoft/VisTalk/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/@vis-talk/vega-builder.svg?color=0084ff)](https://www.npmjs.com/package/@vis-talk/vega-builder)
[![DOI:10.1109/TVCG.2022.3209357](https://zenodo.org/badge/DOI/10.1109/TVCG.2022.3209357.svg)](https://doi.org/10.1109/TVCG.2022.3209357)
[![arxiv badge](https://img.shields.io/badge/arXiv-2208.10947-red)](https://arxiv.org/abs/2208.10947)


**Vis Talk** is a JavaScript library for developers create visualization using natural language.
&nbsp;

## Try it out
You can try the [Vis Talk Playground Web App](https://microsoft.github.io/VisTalk/) or Fork [Vis Talk Observable Notebook](https://observablehq.com/@zhitao/vistalk)


## For Developers
### Installing
----
Install using yarn:
```shell
$ yarn add @vis-talk/vega-builder
```
or install using npm:
```shell
$ npm install @vis-talk/vega-builder
```

## Build a simple react sample app

```shell
$ npx create-react-app my-vis-app
$ cd my-vis-app
$ npm install @vis-talk/vega-builder vega vega-lite react-vega
```

Modify App.js to:
```js
import { createBuilder } from "@vis-talk/vega-builder";
import { VegaLite } from "react-vega";

function App() {
  const table = [
    { Brand: "BrandA", Category: "SUV", Sales: 40 },
    { Brand: "BrandB", Category: "SUV", Sales: 20 },
    { Brand: "BrandC", Category: "SUV", Sales: 30 },
    { Brand: "BrandD", Category: "SUV", Sales: 10 },
    { Brand: "BrandA", Category: "Midsize", Sales: 40 },
    { Brand: "BrandB", Category: "Midsize", Sales: 10 },
    { Brand: "BrandC", Category: "Midsize", Sales: 20 },
    { Brand: "BrandD", Category: "Midsize", Sales: 5 },
  ];
  const builder = createBuilder(table);
  builder.setInput([
    "total sales by brand",
    "highlight midsize in orange",
    "add line in 60 in red",
    "add rect from 12 to 37 in green"]);
  const spec = builder.build({ name: "table" });

  return (
    <div className="App">
      <VegaLite spec={spec} data={{ table }} />
    </div>
  );
}

export default App;
```

start the app:

```shell
$ npm start
```
<img src="https://microsoft.github.io/VisTalk/sample-app.png" width="400px" alt="sample app" />

## API Reference

### createBuilder(dataSource)

Create a new vega visual builder by load your data table.
```ts
function createBuilder(dataSource: DataSource): VegaBuilder;

// data source is array of object, with optional column name list.
export interface DataSource extends Array<object> {
  // List of column names.
  columns?: Array<string>;
}
```
For example, you can create a session using inline records data like:
```ts
const builder = createBuilder([
  { Brand:'BrandA', Category: 'SUV', Sales: 100 },
  { Brand:'BrandB', Category: 'SUV', Sales: 200 },
  { Brand:'BrandC', Category: 'SUV', Sales: 300 }
])
```


### session.setInput(input)
This method allow you specify the natural language input using a single block of text or a multi-line string arry
```ts
class VegaBuilder {
  // Provide your natural language input
  public setInput(lines: string[]);
  ...
}
```
For example:
```ts
builder.setInput(['total sales by brand', 'sort it'])
```

#### builder.build
This property allow you get the generated vega-lite spec as a javascript JSON object (Type defined in Vega-Lite package).
```ts
let spec = builder.build({name: 'table'});
```

### Render Vega Chart:
```shell
$ yarn add vega vega-lite react-vega
```
or 
```shell
$ npm install vega vega-lite react-vega
```

```jsx
import { VegaLite } from "react-vega";

<VegaLite spec={spec} data={{table: rows}} />
```
![Chart 1](https://microsoft.github.io/VisTalk/vistalk.svg "Chart 1")
### More examples - donut chart
```js
builder.setInput([
  'sales by brand as donut chart'
])
```
![Chart 2](https://microsoft.github.io/VisTalk/vistalk-donut.svg "Chart 2")
### More examples - column chart with highlights
```js
builder.setInput([
  'sales by brand as column chart',
  'sort desc',
  'highlight top 2 in green',
  'add line 100 in red',
  'hide grid',
  'make data point wider'
])
```
![Chart 3](https://microsoft.github.io/VisTalk/vistalk-highlight.svg "Chart 3")

# Build from source code
```shell
$ yarn
$ yarn build
```
## Run Tests
```shell
$ yarn test
```

## Build package
```shell
$ yarn package
```

# Citation

If you use VisTalk in your research, please cite as follows:

> Y. Wang et al., "Towards Natural Language-Based Visualization Authoring," in IEEE Transactions on Visualization and Computer Graphics, 2022, doi: 10.1109/TVCG.2022.3209357.


## License
This project is licensed under the [MIT License](LICENSE.txt).

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

import * as ReactDOM from 'react-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import App from './app/app';
ReactDOM.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>,
  document.getElementById('root')
);

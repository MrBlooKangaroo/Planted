import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoot } from './components/app/root';
import { outputBuild } from './utils/output-build';

outputBuild();

const container = document.getElementById('app');

ReactDOM.render(<AppRoot />, container);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
}

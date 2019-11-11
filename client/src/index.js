import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { outputBuild } from './utils/output-build';

outputBuild();

const root = document.getElementById('app');

ReactDOM.render(<App />, root);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.unmountComponentAtNode(root);
  });
}

import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import AppIntl from './AppIntl';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CookiesProvider>
    <AppIntl />
  </CookiesProvider>,
  document.getElementById('root')
);
registerServiceWorker();

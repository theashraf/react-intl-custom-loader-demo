import React from 'react';
import client from 'react-dom/client';
import { IntlProvider } from 'react-intl'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import messages from './lang.json'

const Root = client.createRoot(document.getElementById('root'));
Root.render(
  <React.StrictMode>
    <IntlProvider locale='en' messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

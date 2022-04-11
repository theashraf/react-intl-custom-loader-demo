import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as translations from './App.lang.json';

console.log(translations.title);

function App() {
  return (
    <div className="App">
      <FormattedMessage {...translations.message} />
    </div>
  );
}

export default App;

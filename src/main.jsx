import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './templates/App/index.jsx';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { CounterContextProvider } from './context/CounterContext/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <CounterContextProvider>
        <App>Hello World</App>
      </CounterContextProvider>
    </MyThemeProvider>
  </React.StrictMode>,
);

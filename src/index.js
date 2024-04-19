import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createReduxStore } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={createReduxStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

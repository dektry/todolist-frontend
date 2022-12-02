import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import { setupStore } from './reducers';
import App from './App';

const store = setupStore();

ReactDOM.render(
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
            <App />
          </Provider>
      </SnackbarProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
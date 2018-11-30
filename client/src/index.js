import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import './index.css';
import Routes from './routes';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

// REDUCERS
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));
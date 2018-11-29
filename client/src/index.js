import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import './index.css';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

// REDUCERS
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <header>
            <NavLink to="/">Home</NavLink>
            <NavLink 
                to="/categories"
                activeStyle={{color:'red'}}
                activeClassName="selected"
            >Categories</NavLink>
            <NavLink 
                to="/products"
                activeStyle={{color:'red'}}
                activeClassName="selected"
            >Products</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </header>
          <Switch>
            <Route path="/" component={App}/>
            <Route path="/categories" component={App}/>
            <Route path="/products" component={App}/>
            <Route path="/products/new" component={App}/>
          </Switch>
        </div>
      </BrowserRouter>
</Provider>, document.getElementById('root'));
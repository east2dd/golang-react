import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import ProductView from './components/products/product'
import Login from './containers/admin/login'
import User from './components/admin'
import Register from './containers/admin/register';
import Logout from './components/admin/logout';

import Layout from './hoc/layout'
import Auth from './hoc/auth'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Auth(Login,false)}/>
        <Route path="/user/logout" exact component={Auth(Logout,true)}/>
        <Route path="/user" exact component={Auth(User,true)}/>
        <Route path="/user/register" exact component={Auth(Register,true)}/>
        <Route path="/products/:id" exact component={ProductView}/>
      </Switch>
    </Layout>
  );
};

export default Routes;
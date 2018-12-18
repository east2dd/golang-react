import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/welcome';
import ProductView from './views/products/show';
import NotFound from './containers/404';
import Login from './containers/user/login'
import ProductEdit from './containers/user/products/edit'
import Register from './containers/user/register';
import Logout from './components/user/logout';
import UserProfile from './containers/user/profile'

import Layout from './hoc/layout'
import Auth from './hoc/auth'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home)}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/user/profile" exact component={Auth(UserProfile)}/>
        <Route path="/user/logout" exact component={Auth(Logout,true)}/>
        <Route path="/user/register" exact component={Register}/>
        <Route path="/products/:id" exact component={ProductView}/>
        <Route path="/products/:id/edit" exact component={Auth(ProductEdit, true)}/>
        <Route component={Auth(NotFound, true)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
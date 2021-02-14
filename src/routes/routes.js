import React from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
import Home from "../components/home/HomeContainer";
import Plp from "../components/plp/Plp";
import ProductDescriptionPage from "../components/pdp/Pdp";

const createRoutes = () => (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/plp/:query' component={Plp} exact />
      <Route path='/pdp/:id' component={ProductDescriptionPage} />
      <Redirect to='/' />
    </Switch>
);

export default createRoutes;

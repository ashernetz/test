import React, { Component } from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
import HomeComponent from '../components/homeComponent';
import Header from '../../shared/component/header';


import { Container, Row } from 'react-bootstrap';
import Plp from "./Plp";
import ProductDescriptionPage from "./Pdp";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <Container>
            <Row>
              <Switch>
                <Route path='/' component={HomeComponent} exact />
                <Route path='/plp' component={Plp} />
                <Route path='/pdp/:id' component={ProductDescriptionPage} />
                <Redirect to='/' />
              </Switch>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;


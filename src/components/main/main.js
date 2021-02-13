import React, { Component } from 'react';
import Header from '../header/header';
import { Container, Row } from 'react-bootstrap';
import createRoutes from '../../routes/routes';
import BreadCrums from 'components/breacrums/BreadCrumsContainer';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <Container>
            <Row>
              <BreadCrums />
            </Row>
            <Row>{createRoutes()}</Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import Header from '../header/header';
import { Container, Row } from 'react-bootstrap';
import createRoutes from '../../routes/routes';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <Container>
            <Row>{createRoutes()}</Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

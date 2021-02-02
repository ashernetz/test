import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderForm from '../container/HeaderForm';

function Header() {
  return (
    <div className="header" data-test="component-header">
      <Container>
        <Row>
          <div className="header__container">
            <a className="header__logo" href="/">
              Mercado Libre México - Donde comprar y vender de todo
            </a>
            <div className="header__search">
              <HeaderForm />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Header;

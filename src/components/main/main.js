import React, { Component } from 'react';
import Header from '../header/header';
import { Container, Row } from 'react-bootstrap';
import createRoutes from '../../routes/routes';
import BreadCrums from 'components/breacrums/BreadCrumsContainer';
import {connect} from "react-redux";
import {actions} from "../../context";
import Loading from '../loading/Loading'
import OffersCarousel from "../offersCarousel/OffersCarousel";

class Main extends Component {


  componentDidMount() {
    const {getProducts} = this.props;
    console.log(this.props)
    getProducts('iphone')
  }


  renderPromotions() {
    return (
        <div>
          <OffersCarousel  title="promociones" />

          <OffersCarousel  title="Lo mas vendido" />
        </div>
    )
  }

  renderLoading() {
    return <Loading />;
  }


  render() {
    const {isLoading} = this.props;
    return (
      <React.Fragment>
        <div>
          <Header />
          <Container>
            <Row>{createRoutes()}</Row>

            <div className="main">
              {isLoading ? this.renderLoading() : this.renderPromotions()}
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  let { error, isLoading} = state.products;
  return {
    error,
    isLoading,
  };
}


const mapActionstoProps = {
  getProducts: actions.products.getProducts,
};

export default connect(
    mapStateToProps,
    mapActionstoProps,
)(Main);

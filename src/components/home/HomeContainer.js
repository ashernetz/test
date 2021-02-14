import React, { Component } from 'react';
import { actions } from '../../context';
import { connect } from 'react-redux';
import OffersCarousel from '../offersCarousel/OffersCarousel';
import Loading from '../loading/Loading';

class HomeContainer extends Component {
  componentDidMount() {
    const { getProducts } = this.props;
    console.log(this.props);
    getProducts('iphone');
  }

  renderPromotions() {
    return (
      <div>
        <OffersCarousel title="promociones" />
        <OffersCarousel title="Lo mas vendido" />
      </div>
    );
  }

  renderLoading() {
    return <Loading />;
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="main">
        {isLoading ? this.renderLoading() : this.renderPromotions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { error, isLoading } = state.products;
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
)(HomeContainer);

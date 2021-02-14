import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../../context';
import CarouselElement from './CarouselElement';
import { withRouter } from 'react-router-dom';

class OffersCarousel extends Component {
  constructor(props) {
    super(props);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  renderElements() {
    const { products } = this.props;

    return products.map(product => (
      <CarouselElement
        key={product.id}
        {...product}
        onProductClick={this.handleProductClick}
        keyDown={this.handleKeyDown}
      />
    ));
  }

  handleProductClick(productId) {
    let { history } = this.props;
    history.push({
      pathname: `/pdp/${productId}`,
    });
  }

  handleKeyDown(e, id) {
    if (e.key === 'Enter') this.handleProductClick(id);
  }

  render() {
    const { title } = this.props;
    return (
      <div className="carousel">
        <h2 className="carousel__title"> {title} </h2>
        <div className="carousel__container">
          <ul className="carousel__list">{this.renderElements()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { error, isLoading, products, query, filters } = state.products;
  return {
    error,
    isLoading,
    products,
    query,
    filters,
  };
}

const mapActionstoProps = {
  getProducts: actions.products.getProducts,
};

OffersCarousel.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionstoProps,
  )(OffersCarousel),
);

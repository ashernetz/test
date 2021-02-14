import React, { Component } from 'react';
import Product from '../product/product';
import FiltersList from '../filterList/FiltersList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import BreadCrums from '../breacrums/BreadCrumsContainer'

class productsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderProducts = this.renderProducts.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleProductClick(productId) {
    let { history } = this.props;
    history.push({
      pathname: `/pdp/${productId}`,
    });
  }
  renderFilters() {
    let { filters } = this.props;
    if (filters.length < 1) return;
    return <FiltersList filters={filters} />;
  }

  renderProducts() {
    let { products } = this.props;
    if (products.length < 0) return;
    return products.map(item => {
      return (
        <Product
          key={item.id}
          info={item}
          onProductClick={this.handleProductClick}
          keyDown={this.handleKeyDown}
        />
      );
    });
  }

  handleKeyDown(e, id) {
    if (e.key === 'Enter') this.handleProductClick(id);
  }

  render() {
    return (
        <React.Fragment>
          <Row>
            <BreadCrums />
          </Row>
          <div className="plp">
            <div className="products">
              <div className="products__filters">{this.renderFilters()}</div>
              <div className="products__container">{this.renderProducts()}</div>
            </div>
          </div>
        </React.Fragment>

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

export default withRouter(
  connect(
    mapStateToProps,
    //{ productById },
      null
  )(productsList),
);

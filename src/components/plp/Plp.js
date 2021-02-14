import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../productsList/productsList';
import Loading from '../loading/Loading';
import NoProducts from '../noProducts/NoProducts';
import { actions } from '../../context/index';
import types from '../../modules/products/actions/productsTypes';

class Plp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    let { history, getProducts, match } = this.props;
    const maxProducts = match.params.limit
      ? match.params.limit
      : types.MAX_PRODUCTS_SEARCH;

    if (match.params.query) {
      getProducts(match.params.query, maxProducts);
      this.setState({
        query: match.params.query,
      });
    } else {
      history.push('/');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { getProducts, match, isLoading } = this.props;
    const { query } = this.state;
    const paramsQuery = match.params.query;

    if (paramsQuery !== query && !isLoading) {
      getProducts(paramsQuery);
      this.setState({
        query: paramsQuery,
      });
    }
  }

  renderProducts() {
    let { products, isLoading } = this.props;
    if (products.length < 1 && !isLoading) {
      return this.renderNoProducts();
    }
    return <ProductsList />;
  }

  renderContent() {
    return <React.Fragment>{this.renderProducts()}</React.Fragment>;
  }

  renderLoading() {
    return <Loading />;
  }

  renderNoProducts() {
    let { query } = this.props;
    return <NoProducts query={query} />;
  }

  render() {
    let { isLoading } = this.props;
    return (
      <React.Fragment>
        {isLoading ? this.renderLoading() : this.renderContent()}
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

const mapActionstoProps = {
  getProducts: actions.products.getProducts,
};

export default connect(
  mapStateToProps,
  mapActionstoProps,
)(Plp);

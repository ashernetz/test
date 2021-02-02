import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../../shared/container/productsList';
import Loading from '../../shared/component/Loading';
import NoProducts from '../../shared/component/NoProducts'

class Plp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    let { history } = this.props;
    let { isLoading, query, products } = this.props;
    if (query) {
      this.setState({
        query,
        isLoading,
        products: products,
      });
    } else {
      history.push('/');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let { query, isLoading, products } = this.props;
    let stateQuery = this.state.query;
    let stateLoading = this.state.isLoading;
    if (
      (query !== stateQuery && stateQuery !== '') ||
      isLoading !== stateLoading
    ) {
      this.setState({
        query,
        isLoading,
        products,
      });
    }
  }

  renderProducts() {
    let { products } = this.props;
    if (products.length < 1)  {
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
    let {query} =this.props;
    return  <NoProducts query={query}/>
  }

  render() {
    let { isLoading } = this.state;
    return <React.Fragment>{isLoading ? this.renderLoading() : this.renderContent()}</React.Fragment>;
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
export default connect(
  mapStateToProps,
  null,
)(Plp);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../loading/Loading';
import { withRouter } from 'react-router-dom';
import ProductDetail from './pdpComponent';
import { actions } from '../../context/index';
//import { getProductById } from '../../modules/products/actions/products.actions';

class Pdp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderLoading() {
    return <Loading />;
  }

  renderContent() {
    let { productDescription } = this.props;
    if (!productDescription.name) return;
    return <ProductDetail productDescription={productDescription} />;
  }

  componentDidMount() {
    let { match, getProductById } = this.props;
    getProductById(match.params.id);
  }

  render() {
    let { isLoading } = this.state;
    return (
      <React.Fragment>
        {isLoading ? this.renderLoading() : this.renderContent()}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  let { error, isLoading, productDescription } = state.products;
  return {
    error,
    isLoading,
    productDescription,
  };
}

const mapActionsToProps = {
  getProductById: actions.products.getProductById,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps,
  )(Pdp),
);

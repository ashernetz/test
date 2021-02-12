import React, { Component } from 'react';
import HeaderForm from './HeaderFormComponent';
import { connect } from 'react-redux';
import { actions } from '../../context/index';

class HeaderFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
  }

  handleUpdateQuery(query) {
    let { updateSearchQuery } = this.props;
    updateSearchQuery(query);
  }

  render() {
    return <HeaderForm onUpdateQuery={this.handleUpdateQuery} />;
  }
}

function mapStateToProps(state) {
  return state;
}
const mapActionsToProps = {
  updateSearchQuery: actions.products.updateSearchQuery,
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(HeaderFormContainer);

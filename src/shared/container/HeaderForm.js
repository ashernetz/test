import React, {Component} from 'react';
import HeaderForm from '../component/HeaderForm';
import {updateSearchQuery} from "../../actions/products.actions";
import { connect } from 'react-redux';


class HeaderFormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {};
    this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
  }

  handleUpdateQuery(query) {
    let {updateSearchQuery} = this.props;
    updateSearchQuery(query)
  }

  render() {
    return (
        <HeaderForm  onUpdateQuery={this.handleUpdateQuery}/>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
    mapStateToProps,
    { updateSearchQuery },
)(HeaderFormContainer);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../component/Filter';

class FiltersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    filters: [],
  };

  static propTypes = {
    filters: PropTypes.array,
  };

  renderFilters() {
    let { filters } = this.props;
    if (filters.length < 1) return;
    return filters.map((filterData, key) => {
     return  <Filter key={key} data={filterData} />;
    });
  }

  render() {
    return <React.Fragment>{this.renderFilters()}</React.Fragment>;
  }
}

export default FiltersList;

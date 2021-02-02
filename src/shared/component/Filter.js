import React from 'react';
import PropTypes from 'prop-types';
import FilterOptionsList from './FilterOptionsList'


function Filter({data}) {
  return (
      <div className="filter" data-test="component-filter">
        <h3 className="filter__title">  {data.name} </h3>
        <div className="filter__options-container">
          <FilterOptionsList options={data.values}/>
        </div>

      </div>
  );
}

Filter.propTypes = {
  data: PropTypes.object
};
Filter.defaultProps = {
  data: {
    name: '',
    values: []
  }
};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';

function FilterOptionsList({ options }) {
  return options.map((opt, i) => {
    return (<div className="filter__option" key={i}>
      <a href="/" className="filter__option">
        <span className="filter__name"> {opt.name} </span>
        <span className="filter__results-qty"> {opt.results} </span>
      </a>
    </div>)
  });
}

FilterOptionsList.propTypes = {
  filterOptions: PropTypes.array,
};
FilterOptionsList.defaultProps = {
  filterOptions: [],
};

export default FilterOptionsList;

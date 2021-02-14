import React from 'react';
import PropTypes from 'prop-types';

function BreadCrumComponent({ name, handleClick }) {
  return (
    <li className="breadcrums__item" >
      <a href="/"
        onClick={e => {
          e.preventDefault();
          handleClick(name);
        }}
      >
        {name}
      </a>
    </li>
  );
}

BreadCrumComponent.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default BreadCrumComponent;

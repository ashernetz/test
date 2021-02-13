import React from 'react';
import PropTypes from 'prop-types';

function BreadCrumComponent({ name, handleClick }) {
  return (
    <li className="breadcrums__item" >
      <a
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

BreadCrumComponent.propTypes = {};
BreadCrumComponent.defaultProps = {};

export default BreadCrumComponent;

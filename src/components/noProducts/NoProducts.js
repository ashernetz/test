import React from 'react';
import PropTypes from 'prop-types';

function NoProducts({ query }) {
  return (
    <div className="no-products" data-test="component-no-products">
      <h1 className="no-products__title">No hay publicaciones que coincidan con tu búsqueda. {query} </h1>
      <ul>
        <li>Revisa la ortografía de la palabra.</li>
        <li>Utiliza palabras más genéricas o menos palabras.</li>
        <li>Navega por las categorías para encontrar un producto similar</li>
      </ul>
    </div>
  );
}

NoProducts.propTypes = {
  query: PropTypes.string.isRequired,
};
NoProducts.defaultProps = {
  query: '',
};

export default NoProducts;

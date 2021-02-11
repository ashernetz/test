import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

function products({ info, onProductClick, keyDown }) {
  return (
    <div
      className="product"
      key={info.id}
      onClick={() => onProductClick(info.id)}
      tabIndex="0"
      onKeyDown={e => keyDown(e, info.id)}
      aria-label={info.title}
    >
      <div className="product__img">
        <img src={info.thumbnail} alt={info.title} />
      </div>

      <div className="product__description">
        <div className="product__price">
          <span>
            <NumberFormat
              value={info.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </span>
        </div>

        <div className="product__info">
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              onProductClick(info.id);
            }}
            className="product__title"
          >
            {info.title}
          </a>
        </div>
      </div>

      <div className="product__location">
        <span>{info.address.state_name}</span>
      </div>
    </div>
  );
}

products.propTypes = {
  info: PropTypes.object,
  onProductClick: PropTypes.func,
  keyDown: PropTypes.func,
};
products.defaultProps = {
  info: {},
};

export default products;

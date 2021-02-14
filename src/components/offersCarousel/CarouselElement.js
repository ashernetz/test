import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

function CarouselElement(props) {
  console.log(props);
  return (
    <div
      className="carouselHero"
      tabIndex="0"
      onClick={() => {
        props.onProductClick(props.id);
      }}
      onKeyDown={(e) => {
        props.keyDown(e, props.id);
      }}
    >
      <img src={props.thumbnail} alt="" className="carouselHero__img" />

      <div className="carouselHero__price">
        <span className="carouselHero__price-amount">
          <NumberFormat
            value={props.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </span>
      </div>

      <div className="carouselHero__info">
        <h3 className="carouselHero__title"> {props.title} </h3>
      </div>
    </div>
  );
}

CarouselElement.propTypes = {};
CarouselElement.defaultProps = {};

export default CarouselElement;

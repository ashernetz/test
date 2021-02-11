import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { Button } from 'react-bootstrap';

function ProductDetail({ productDescription }) {
  return (
    <div className="product-detail" data-test="component-product-details">
      <div className="product-detail__gallery">
        <ImageGallery items={productDescription.pictures} />
      </div>
      <div className="product-detail__info">
        <div className="product-detail__condition">
          <span> {productDescription.condition} </span>
          <span>{productDescription.sold_quantity}</span>
        </div>
        <div className="product-detail__description">
          <h2> {productDescription.name} </h2>
        </div>
        <div className="product-detail__price">
          <span>
            <NumberFormat
              value={productDescription.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </span>
        </div>

        <div className="product-detail__quantity">
          <span>Cantidad: </span>
          <span> ({productDescription.quantity} disponibles)</span>
        </div>

        <div className="product-detail__actions">
          <Button variant="primary">Comprar</Button>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  productDescription: PropTypes.object,
};
ProductDetail.defaultProps = {
  productDescription: {},
};

export default ProductDetail;

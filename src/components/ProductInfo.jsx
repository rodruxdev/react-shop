import React from "react";
import '@styles/ProductInfo.scss';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <div className="ProductInfo">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src={addCart} alt="" />
      </figure>
    </div>
  );
};

export default ProductInfo;

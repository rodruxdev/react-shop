import React from "react";
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
  return (
    <div className="ProductInfo">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="" />
      </figure>
    </div>
  );
};

export default ProductInfo;

import React from "react";
import '@styles/ProductInfo.scss';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = ({ price, productName }) => {
  const [cart, setCart] = React.useState([]);

  const handleClick = () => {
    setCart([])
  }

  return (
    <div className="ProductInfo">
      <div>
        <p>{price}</p>
        <p>{productName}</p>
      </div>
      <figure onClick={handleClick}>
        <img src={addCart} alt="" />
      </figure>
    </div>
  );
};

export default ProductInfo;

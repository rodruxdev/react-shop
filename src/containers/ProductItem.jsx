import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductItem.scss'

const ProductItem = () => {
  return (
    <div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<ProductInfo />
		</div>
  );
};

export default ProductItem;

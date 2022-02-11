import React from 'react';
import axios from 'axios';
import ProductItem from '@containers/ProductItem';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = React.useState([]);

	React.useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, [])
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
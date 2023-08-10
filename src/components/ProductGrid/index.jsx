import React, { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './styles.module.css';

const ProductGrid = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}, []);

	console.log(products);

	if (!products.length) {
		return (
			<div className={classes['custom-loader-container']}>
				<div className={classes['custom-loader']}></div>
			</div>
		);
	} else {
		<></>;
	}
};

export default ProductGrid;

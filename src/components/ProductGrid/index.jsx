import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Product from '../Product';

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
	}

	return (
		<div className={classes['products']}>
			{products.map((product) => {
				return (
					<Product
						key={product.id}
						title={product.title}
						price={product.price}
						category={product.category}
						imageLink={product.image}
						className={classes['products__product']}
					></Product>
				);
			})}
		</div>
	);
};

export default ProductGrid;

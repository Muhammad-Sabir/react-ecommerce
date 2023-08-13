import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductGrid from '../../components/ProductGrid';
import CategorySidebar from '../../components/CategorySidebar';

import classes from './styles.module.css';

const Products = () => {
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
		<div className={classes['products-page']}>
			<CategorySidebar
				products={products}
				className={classes['products-page__sidebar']}
			></CategorySidebar>
			<ProductGrid
				products={products}
				className={classes['products-page__products-grid']}
			></ProductGrid>
		</div>
	);
};

export default Products;

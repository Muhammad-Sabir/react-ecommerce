import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductGrid from '../../components/ProductGrid';
import CategorySidebar from '../../components/CategorySidebar';

import classes from './styles.module.css';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [productsToShow, setProductsToShow] = useState([]);

	const [category, setCategory] = useState('');

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then((response) => {
				setProducts(response.data);
				setProductsToShow(response.data);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}, []);

	useEffect(() => {
		if (category === '') setProductsToShow([...products]);
		else {
			const prods = products.filter(
				(product) => product.category === category
			);

			setProductsToShow([...prods]);
		}
	}, [category]);

	console.log(products);

	if (!productsToShow.length) {
		return (
			<div className={classes['custom-loader-container']}>
				<div className={classes['custom-loader']}></div>
			</div>
		);
	}

	return (
		<div className={classes['products-page']}>
			<div className={classes['products-page__search-filter']}>
				<select
					name="sort"
					defaultValue=""
					className={classes['select']}
				>
					<option value="" disabled>
						Sort Products
					</option>
					<option value="price-ascending">Price Ascending</option>
					<option value="price-descending">Price Descending</option>
					<option value="alphabets-ascending">
						Alphabets Ascending
					</option>
					<option value="alphabets-descending">
						Alphabets Descending
					</option>
				</select>

				<input
					className={classes['input']}
					name="text"
					placeholder="Search..."
					type="search"
				/>
			</div>

			<div className={classes['products-page__category-products']}>
				<CategorySidebar
					products={productsToShow}
					className={classes['products-page__sidebar']}
				></CategorySidebar>
				<ProductGrid
					products={productsToShow}
					className={classes['products-page__products-grid']}
				></ProductGrid>
			</div>
		</div>
	);
};

export default Products;

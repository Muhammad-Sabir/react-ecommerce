import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import ProductGrid from '../../components/ProductGrid';
import CategorySidebar from '../../components/CategorySidebar';

import classes from './styles.module.css';

const Products = () => {
	const { categoryParam } = useParams();
	const [category, setCategory] = useState('');

	useEffect(() => {
		setCategory(categoryParam || '');
	}, [categoryParam]);

	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [productsToShow, setProductsToShow] = useState([]);
	const [categorizedProducts, setCategorizedProducts] = useState([]);

	const [selectedOption, setSelectedOption] = useState('');

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then((response) => {
				setProducts(response.data);

				if (!categoryParam) {
					setProductsToShow(response.data);
					setCategorizedProducts(response.data);
				} else {
					const prods = response.data.filter(
						(product) => product.category === categoryParam
					);

					setProductsToShow([...prods]);
					setCategorizedProducts([...prods]);
				}

				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}, []);

	useEffect(() => {
		if (category === '') {
			setProductsToShow([...products]);
			setCategorizedProducts([...products]);
		} else {
			const prods = products.filter(
				(product) => product.category === category
			);

			setProductsToShow([...prods]);
			setCategorizedProducts([...prods]);
		}

		setSelectedOption('');
	}, [category]);

	const onSearchHandler = (event) => {
		const input = event.target.value;

		const prods = categorizedProducts.filter((product) => {
			return product.title.toLowerCase().startsWith(input.toLowerCase());
		});

		if (input.trim()) {
			setProductsToShow(prods);
		} else setProductsToShow([...categorizedProducts]);

		setSelectedOption('');
	};

	const selectChangehandler = (event) => {
		const value = event.target.value;
		let prods = [];

		if (value === 'price-ascending') {
			prods = productsToShow.slice().sort((a, b) => a.price - b.price);
		} else if (value === 'price-descending') {
			prods = productsToShow.slice().sort((a, b) => b.price - a.price);
		} else if (value === 'alphabets-ascending') {
			prods = productsToShow.slice().sort((a, b) => {
				const nameA = a.title.toUpperCase();
				const nameB = b.title.toUpperCase();

				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			});
		} else {
			prods = productsToShow.slice().sort((a, b) => {
				const nameA = a.title.toUpperCase();
				const nameB = b.title.toUpperCase();

				if (nameA > nameB) {
					return -1;
				}
				if (nameA < nameB) {
					return 1;
				}
				return 0;
			});
		}

		setProductsToShow(prods);
		setSelectedOption(value);
	};

	if (loading) {
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
					value={selectedOption}
					className={classes['select']}
					onChange={selectChangehandler}
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
					onChange={onSearchHandler}
				/>
			</div>

			<div className={classes['products-page__category-products']}>
				<CategorySidebar
					products={products}
					currentCategory={category}
					className={classes['products-page__sidebar']}
				></CategorySidebar>

				{productsToShow.length ? (
					<ProductGrid
						products={productsToShow}
						className={classes['products-page__products-grid']}
					></ProductGrid>
				) : (
					<h1 className={classes['products-page__product-not-found']}>
						No Products Found!
					</h1>
				)}
			</div>
		</div>
	);
};

export default Products;

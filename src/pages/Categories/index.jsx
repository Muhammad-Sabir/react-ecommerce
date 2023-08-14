import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CategorySidebar from '../../components/CategorySidebar';

const Categories = ({ products }) => {
	const [categories, setCategories] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/products')
			.then((response) => {
				const categoriesSet = [
					...new Set(
						response.data.map((product) => product.category)
					),
				];

				setCategories(categoriesSet);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}, []);

	if (loading) return <h1>Loading</h1>;

	return (
		<div>
			<h2></h2>

			<div>
				{categories.map((category) => {
					return <p key={category}>{category}</p>;
				})}
			</div>
		</div>
	);
};

export default Categories;

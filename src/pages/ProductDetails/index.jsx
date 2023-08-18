import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from '../../components/Loader';

import classes from './styles.module.css';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((response) => {
				setProduct(response.data);
				console.log(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div>
			<div>
				<img src={product.image} alt="Product Image" />
			</div>

			<div>
				<p>{product.category}</p>
				<h2>{product.title}</h2>
				<p>{product.description}</p>
				<p>
					Rating: {product.rating.rate} ({product.rating.count})
				</p>

				<div>
					<input type="number" name="quantity" min="1" />
					<button>Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;

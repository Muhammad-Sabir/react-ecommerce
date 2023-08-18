import React, { useState } from 'react';
import axios from 'axios';

import classes from './styles.module.css';

const ProductDetails = ({ id }) => {
	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((response) => {
				setProduct(response.data);

				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}, []);
	return <></>;
};

export default ProductDetails;

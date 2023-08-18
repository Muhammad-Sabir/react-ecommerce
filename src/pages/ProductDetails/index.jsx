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
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			});
	}, []);

	if (loading) {
		return <Loader />;
	}

	return <></>;
};

export default ProductDetails;

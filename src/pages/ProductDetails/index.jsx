import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

import AuthContext from '../../context/AuthContext';
import Loader from '../../components/Loader';

import classes from './styles.module.css';

const ProductDetails = () => {
	const authContext = useContext(AuthContext);

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

	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(cartActions.addProductToCart(product));
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={classes['product']}>
			<div className={classes['product__image']}>
				<img src={product.image} alt="Product Image" />
			</div>

			<div className={classes['product__details']}>
				<p className={classes['product__details__category']}>
					{product.category}
				</p>
				<h2 className={classes['product__details__title']}>
					{product.title}
				</h2>
				<p className={classes['product__details__description']}>
					{product.description}
				</p>
				<p className={classes['product__details__price']}>
					$ {product.price} USD
				</p>
				<p className={classes['product__details__rating']}>
					Rating: {product.rating.rate}
					<span
						className={classes['product__details__rating__count']}
					>
						({product.rating.count})
					</span>
				</p>

				{authContext.isLoggedIn ? (
					<button
						className={classes['add-to-cart__btn']}
						onClick={addToCartHandler}
					>
						Add to Cart
					</button>
				) : (
					<p className={classes['add-to-cart__sign-in']}>
						Sign In to Add to Cart
					</p>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;

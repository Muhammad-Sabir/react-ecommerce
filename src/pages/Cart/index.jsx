import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';

import classes from './styles.module.css';

const Cart = () => {
	const products = useSelector((state) => state.cart.products);

	console.log(products);

	return (
		<>
			<h1 className={classes['heading']}>Your Cart</h1>

			{products.map((item) => {
				return (
					<div className={classes['products-card']}>
						<div className={classes['image-container']}>
							<img
								src={item.product.image}
								alt={item.product.title}
							/>
						</div>

						<div className={classes['products-card__details']}>
							<p
								className={
									classes['products-card__details__title']
								}
							>
								{item.product.title}
							</p>
							<p
								className={
									classes['products-card__details__price']
								}
							>
								$ {item.product.price} USD
							</p>
						</div>

						<p>{item.quantity}</p>
					</div>
				);
			})}
		</>
	);
};

export default Cart;

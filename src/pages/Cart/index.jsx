import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

import classes from './styles.module.css';

const Cart = () => {
	const products = useSelector((state) => state.cart.products);

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

						<div className={classes['quantity']}>
							<button>+</button>
							<p>{item.quantity}</p>
							<button>-</button>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Cart;

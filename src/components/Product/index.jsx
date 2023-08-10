import React from 'react';
import Card from '../Card';

import classes from './styles.module.css';

const Product = ({ title, price, category, imageLink }) => {
	return (
		<Card className={classes['product']}>
			<img
				src="https://assets.website-files.com/649409997a1a98426b1aa230/6494209ae4949b66bd9c69f1_Earbud%20Y168A-p-500.jpg"
				alt="something"
			/>

			<div className={classes['product__details']}>
				<p className={classes['product__details__category']}>Earbuds</p>
				<h2 className={classes['product__details__title']}>
					Earbud 168A
				</h2>
				<p className={classes['product__details__price']}>
					$ 87.24 USD
				</p>
			</div>
		</Card>
	);
};

export default Product;

import React from 'react';
import Card from '../Card';

import { Link } from 'react-router-dom';

import classes from './styles.module.css';

const Product = ({ id, title, price, category, imageLink, className }) => {
	return (
		<Link to={`/product-details/${id}`}>
			<Card className={`${classes['product']} ${className}`}>
				<div className={classes['image-container']}>
					<img src={imageLink} alt={title} />
				</div>

				<div className={classes['product__details']}>
					<p className={classes['product__details__category']}>
						{category}
					</p>
					<h2 className={classes['product__details__title']}>
						{title}
					</h2>
					<p className={classes['product__details__price']}>
						$ {price} USD
					</p>
				</div>
			</Card>
		</Link>
	);
};

export default Product;

import React from 'react';

import Product from '../Product';

import classes from './styles.module.css';

const ProductGrid = ({ products, className }) => {
	return (
		<div className={`${classes['products']} ${className}`}>
			{products.map((product) => {
				return (
					<Product
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						category={product.category}
						imageLink={product.image}
						className={classes['products__product']}
					></Product>
				);
			})}
		</div>
	);
};

export default ProductGrid;

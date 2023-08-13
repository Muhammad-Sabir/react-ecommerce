import React from 'react';

import Product from '../Product';

import classes from './styles.module.css';

const ProductGrid = ({ products }) => {
	return (
		<div className={classes['products']}>
			{products.map((product) => {
				return (
					<Product
						key={product.id}
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

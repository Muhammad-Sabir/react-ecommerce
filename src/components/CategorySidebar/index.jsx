import React from 'react';

import classes from './styles.module.css';

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

const CategorySidebar = ({ products, className }) => {
	const categories = [
		...new Set(products.map((product) => product.category)),
	];

	return (
		<div className={`${classes['sidebar']} ${className}`}>
			<h2 className={classes['sidebar__heading']}>Products Category</h2>

			<div className={classes['sidebar__categories']}>
				{categories.map((category) => {
					return (
						<p className={classes['sidebar__categories__category']}>
							{category}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default CategorySidebar;

import React from 'react';

import classes from './styles.module.css';

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
						<p
							key={category}
							className={classes['sidebar__categories__category']}
						>
							{category}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default CategorySidebar;

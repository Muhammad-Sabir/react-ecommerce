import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './styles.module.css';

const CategorySidebar = ({ products, className, currentCategory }) => {
	const navigate = useNavigate();

	const categories = [
		...new Set(products.map((product) => product.category)),
	];

	const categoryClickHandler = (category) => {
		if (category !== currentCategory) {
			navigate(`${category}`);
		} else {
			navigate('');
		}
	};

	return (
		<div className={`${classes['sidebar']} ${className}`}>
			<h2 className={classes['sidebar__heading']}>Products Category</h2>

			<div className={classes['sidebar__categories']}>
				{categories.map((category) => {
					return (
						<p
							key={category}
							className={`${
								classes['sidebar__categories__category']
							} ${
								currentCategory === category &&
								classes['sidebar__categories__selected']
							}`}
							onClick={() => {
								categoryClickHandler(category);
							}}
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

import React from 'react';

import classes from './styles.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className={classes['logo']}>E-COMMERCE</div>
			<ul className={classes['nav-links']}>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/products">Products</NavLink>
				</li>
				<li>
					<NavLink to="/categories">Catergories</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

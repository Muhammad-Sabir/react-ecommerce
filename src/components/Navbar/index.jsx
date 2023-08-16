import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './styles.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav>
				<div className={classes['logo']}>E-COMMERCE</div>
				<ul className={classes['nav-links']}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/products">Products</NavLink>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;

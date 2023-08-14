import React from 'react';

import classes from './styles.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className={classes['logo']}>E-COMMERCE</div>
			<ul className={classes['nav-links']}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<Link to="/categories">Catergories</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

import React from 'react';

import classes from './styles.module.css';

const Navbar = () => {
	return (
		<nav>
			<div className={classes['logo']}>E-COMMERCE</div>
			<ul className={classes['nav-links']}>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Products</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

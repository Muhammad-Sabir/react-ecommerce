import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

import classes from './styles.module.css';

const Navbar = () => {
	const authContext = useContext(AuthContext);

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

					{authContext.isLoggedIn ? (
						<li className={classes['authentication-btn']}>
							<NavLink to="/signin">Sign In</NavLink>
						</li>
					) : (
						<li className={classes['authentication-btn']}>
							<NavLink to="/products">Sign Up</NavLink>
						</li>
					)}
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;

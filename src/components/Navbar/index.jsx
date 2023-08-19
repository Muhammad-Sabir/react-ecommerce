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
							<NavLink
								to="/"
								onClick={() => {
									authContext.onLogout();
								}}
							>
								Logout
							</NavLink>
						</li>
					) : (
						<li className={classes['authentication-btn']}>
							<NavLink to="/login">Sign In</NavLink>
						</li>
					)}

					<li>
						<button className={classes['cart-btn']}>Cart</button>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;

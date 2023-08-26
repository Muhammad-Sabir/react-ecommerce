import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

import classes from './styles.module.css';

const Navbar = () => {
	const navigate = useNavigate();
	const authContext = useContext(AuthContext);

	const cartHandler = () => {
		navigate('/cart');
	};

	return (
		<>
			<nav className={classes['nav']}>
				<div className={classes['logo']}>E-COMMERCE</div>

				<ul className={classes['nav-links']}>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>

					<li>
						<NavLink to="/products">Products</NavLink>
					</li>
				</ul>

				{authContext.isLoggedIn ? (
					<div className={classes['cart-auth']}>
						<button
							onClick={cartHandler}
							className={classes['cart-btn']}
						>
							Cart
						</button>

						<div className={classes['authentication-btn']}>
							<NavLink
								to="/"
								onClick={() => {
									authContext.onLogout();
								}}
							>
								Logout
							</NavLink>
						</div>
					</div>
				) : (
					<div className={classes['authentication-btn']}>
						<NavLink to="/login">Sign In</NavLink>
					</div>
				)}
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;

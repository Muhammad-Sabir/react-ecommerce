import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
				<NavLink to="/" className={classes['logo']}>
					E-COMMERCE
				</NavLink>

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
						<div
							onClick={cartHandler}
							className={classes['cart-btn']}
						>
							<FontAwesomeIcon icon={faShoppingCart} />
						</div>

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

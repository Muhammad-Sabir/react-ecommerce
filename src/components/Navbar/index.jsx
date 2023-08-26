import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import AuthContext from '../../context/AuthContext';

import classes from './styles.module.css';

const Navbar = () => {
	const navigate = useNavigate();
	const authContext = useContext(AuthContext);

	const getProductsCount = () => {
		const products = useSelector((state) => state.cart.products);

		const count = products.reduce(
			(total, product) => total + product.quantity,
			0
		);

		return count;
	};

	const productsOnCartCount = getProductsCount();

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
							<span className={classes['cart-btn__prods-count']}>
								{productsOnCartCount}
							</span>
						</div>

						<div className={classes['authentication-red']}>
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
					<div className={classes['authentication-green']}>
						<NavLink to="/login">Sign In</NavLink>
					</div>
				)}
			</nav>

			<Outlet />
		</>
	);
};

export default Navbar;

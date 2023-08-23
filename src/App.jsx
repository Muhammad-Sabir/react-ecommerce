import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Error from './pages/Error';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';

import store from './store/index';

import './App.css';

function App() {
	return (
		<>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route index element={<Home />} />
						<Route path="products" element={<Products />}>
							<Route
								path=":categoryParam"
								element={<Products />}
							/>
						</Route>
						<Route
							path="product-details/:id"
							element={<ProductDetails />}
						/>
						<Route path="cart" element={<Cart />} />
					</Route>

					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Provider>
		</>
	);
}

export default App;

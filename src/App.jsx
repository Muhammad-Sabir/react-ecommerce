import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Error from './pages/Error';

import Login from './pages/Login';

import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path="products" element={<Products />}>
						<Route path=":categoryParam" element={<Products />} />
					</Route>
				</Route>

				<Route path="login" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;

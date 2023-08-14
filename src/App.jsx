import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Error from './pages/Error';

import './App.css';

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="categories" element={<Categories />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;

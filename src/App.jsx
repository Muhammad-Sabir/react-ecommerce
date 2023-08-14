import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="categories" element={<Categories />} />
			</Routes>
		</>
	);
}

export default App;

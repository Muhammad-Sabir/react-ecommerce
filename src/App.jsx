import React from 'react';

import Product from './components/Product';
import ProductGrid from './components/ProductGrid';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<>
			<Navbar></Navbar>
			<ProductGrid></ProductGrid>
		</>
	);
}

export default App;

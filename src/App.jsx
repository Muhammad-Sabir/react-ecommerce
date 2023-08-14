import React from 'react';

import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Categories></Categories>
		</>
	);
}

export default App;

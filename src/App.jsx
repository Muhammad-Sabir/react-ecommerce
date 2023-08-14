import React from 'react';

import Products from './pages/Products';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Home></Home>
		</>
	);
}

export default App;

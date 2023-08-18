import React from 'react';

import classes from './styles.module.css';

const Loader = () => {
	return (
		<div className={classes['custom-loader-container']}>
			<div className={classes['custom-loader']}></div>
		</div>
	);
};

export default Loader;

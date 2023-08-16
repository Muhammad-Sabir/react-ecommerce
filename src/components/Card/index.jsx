import React from 'react';

import classes from './styles.module.css';

const Card = (props) => {
	// props - className

	return (
		<div className={`${classes['card']} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;

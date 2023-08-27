import React from 'react';

import classes from './styles.module.css';

const Card = (props) => {
	// props - className

	return (
		<div
			className={`${classes['card']} ${props.className}`}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
};

export default Card;

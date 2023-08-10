import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
	// props - classname(optional), type(optional), onClick()

	return (
		<button
			className={`${classes['button']} ${props.className}`}
			type={props.type || 'button'}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;

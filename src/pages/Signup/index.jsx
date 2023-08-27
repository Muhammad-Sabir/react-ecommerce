import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import AuthContext from '../../context/AuthContext';

import classes from './styles.module.css';

const Signup = () => {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	const initialValues = {
		name: '',
		email: '',
		contactNumber: '',
		password: '',
		confirmPassword: '',
	};

	const validationSchema = yup.object().shape({
		name: yup.string().required('Name is required'),
		email: yup
			.string()
			.email('Invalid email format')
			.required('Email is required'),
		contactNumber: yup
			.string()
			.matches(/^\d{11}$/, 'Invalid contact number format'),
		password: yup
			.string()
			.required('Password is required')
			.matches(
				/^(?=.*[A-Z])(?=.*\d).{8,}$/,
				'Password must contain at least 8 characters, one uppercase letter, and one number'
			),
		confirmPassword: yup
			.string()
			.required('Confirm Password is required')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	});

	const handleSubmit = (values) => {
		authContext.onSignUp(values.email, values.password);
		navigate('/');
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className={classes['form']}>
				<p className={classes['form-title']}>Sign Up</p>

				<div className={classes['input-container']}>
					<Field type="text" name="name" placeholder="Enter name" />
					<ErrorMessage
						name="name"
						component="div"
						className={classes['error-message']}
					/>
				</div>

				<div className={classes['input-container']}>
					<Field
						type="email"
						name="email"
						placeholder="Enter email"
					/>
					<ErrorMessage
						name="email"
						component="div"
						className={classes['error-message']}
					/>
				</div>

				<div className={classes['input-container']}>
					<Field
						type="text"
						name="contactNumber"
						placeholder="Enter Contact Number"
					/>
					<ErrorMessage
						name="contactNumber"
						component="div"
						className={classes['error-message']}
					/>
				</div>

				<div className={classes['input-container']}>
					<Field
						type="password"
						name="password"
						placeholder="Enter password"
					/>
					<ErrorMessage
						name="password"
						component="div"
						className={classes['error-message']}
					/>
				</div>

				<div className={classes['input-container']}>
					<Field
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
					/>
					<ErrorMessage
						name="confirmPassword"
						component="div"
						className={classes['error-message']}
					/>
				</div>

				<button type="submit" className={classes['submit']}>
					Sign Up
				</button>
			</Form>
		</Formik>
	);
};

export default Signup;

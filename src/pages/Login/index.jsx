import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import AuthContext from '../../context/AuthContext';

import classes from './styles.module.css';

const Login = () => {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	const defaultValues = {
		email: '',
		password: '',
	};

	const validationSchema = yup.object().shape({
		email: yup.string().required('Required').email('Invalid email'),
		password: yup
			.string()
			.required('Password is required')
			.matches(
				/^(?=.*[A-Z])(?=.*\d).{8,}$/,
				'Password must contain at least 8 characters, one uppercase letter, and one number'
			),
	});

	const handleSubmit = (values) => {
		authContext.onLogin(values.email, values.password);
		navigate('/');
	};

	return (
		<Formik
			initialValues={defaultValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className={classes['form']}>
				<p className={classes['form-title']}>Sign in to your account</p>

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

				<button type="submit" className={classes['submit']}>
					Sign in
				</button>

				<p className={classes['signup-link']}>
					No account?
					<Link to="/signup">Sign up</Link>
				</p>
			</Form>
		</Formik>
	);
};

export default Login;

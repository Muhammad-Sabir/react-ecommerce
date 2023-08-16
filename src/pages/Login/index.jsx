import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import classes from './styles.module.css';

const Login = () => {
	const defaultValues = {
		email: '',
		password: '',
	};

	const validationSchema = yup.object().shape({
		email: yup.string().required('Required').email('Invalid email'),
		password: yup.string().required('Required'),
	});

	const handleSubmit = (values) => {
		console.log(values);
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
					<a href="">Sign up</a>
				</p>
			</Form>
		</Formik>
	);
};

export default Login;

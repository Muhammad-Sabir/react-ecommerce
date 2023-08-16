import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import classes from './styles.module.css';

const Login = () => {
	return (
		<Formik>
			<Form className={classes['form']}>
				<p className={classes['form-title']}>Sign in to your account</p>
				
				<div className={classes['input-container']}>
					<Field type="email" placeholder="Enter email" />
					<span></span>
				</div>
				<div className={classes['input-container']}>
					<Field type="password" placeholder="Enter password" />
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

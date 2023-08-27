import React, { useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogin: (email, password) => {},
	onSignUp: (email, password) => {},
	onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) setIsLoggedIn(true);
		else setIsLoggedIn(false);
	});

	const onSignUpHandler = async (email, password) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.log(err.message);
		}
	};

	const onLoginHandler = async (email, password) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.log(err.message);
		}
	};

	const onLogoutHandler = async () => {
		try {
			await signOut(auth);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: onLoginHandler,
				onLogout: onLogoutHandler,
				onSignUp: onSignUpHandler,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

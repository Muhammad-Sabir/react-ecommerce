import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogin: (email, password) => {},
	onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedLogInData = localStorage.getItem('isLoggedIn');

		if (storedLogInData === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	const onLoginHandler = () => {
		localStorage.setItem('isLoggedIn', '1');
		setIsLoggedIn(true);
	};

	const onLogoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: onLoginHandler,
				onLogout: onLogoutHandler,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

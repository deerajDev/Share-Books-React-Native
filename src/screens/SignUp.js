import React from 'react';
import SignUp from '../components/accounts/SignUp';

const signUpScreen = ({ navigation }) => {
	return <SignUp navigate={navigation.navigate} />;
};

export default signUpScreen;

import React from 'react';

import Login from '../components/accounts/Login';

const LoginScreen = ({navigation}) => {
  return <Login navigate={navigation.navigate} />;
};

export default LoginScreen;

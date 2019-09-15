import {AUTH_SUCCESS, IS_LOADING, LOADING_DONE} from './types';
import {AsyncStorage, Alert} from 'react-native';
import axios from 'axios';

//LOGIN METHOD
export const login = (email, password) => dispatch => {
  const body = JSON.stringify({email, password});
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post(
      'http://sharebooksbackend.herokuapp.com/api/accounts/login',
      body,
      config,
    )
    .then(res => {
      AsyncStorage.setItem('token', res.data.token);
      console.log('above was the token');
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data.token,
      });
    })
    //FIXME: send the error message to the message reducer
    .catch(err => Alert.alert('Error', 'Login Failed'));
  dispatch({
    type: LOADING_DONE,
  });
};

//METHOD FOR REGISTERING
export const signUp = (email, password, college, contact_num) => dispatch => {
  const body = JSON.stringify({email, password, college, contact_num});
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  dispatch({
    type: IS_LOADING,
  });
  axios
    .post(
      'http://sharebooksbackend.herokuapp.com/api/accounts/register',
      body,
      config,
    )
    .then(res => {
      AsyncStorage.setItem('token', res.data.token);

      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data.token,
      });
    })
    .catch(err => {
      console.log(err.response.data);
      Alert.alert('Error', 'Sign Up failed');
    });

  dispatch({
    type: LOADING_DONE,
  });
};

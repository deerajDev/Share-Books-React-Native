import {AsyncStorage} from 'react-native';
import {AUTH_SUCCESS} from '../../store/actions/types';

export const validateCollege = college => {
  if (!college) {
    return false;
  }
  return true;
};

export const validateNumber = contactNum => {
  if (!contactNum) {
    return false;
  }
  let number = contactNum;
  if (number[0] === '0') {
    false;
  }
  number = number.replace(/\./g, '');
  number = number.replace(/,/g, '');
  number = number.replace(/-/g, '');
  number = number.replace(/ /g, '');
  if (number[0] === '0' || number.length !== 10) {
    return false;
  }
  return true;
};

export const validateEmail = email => {
  if (!email.includes('@') || !email.endsWith('.com')) {
    return false;
  }
  return true;
};

export const getToken = () => dispatch => {
  try {
    AsyncStorage.getItem('token').then(val => {
      if (val) {
        dispatch({
          type: AUTH_SUCCESS,
          payload: val,
        });
      }
      return;
    });
  } catch (err) {
    return;
  }
};

export const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (err) {
    return;
  }
};

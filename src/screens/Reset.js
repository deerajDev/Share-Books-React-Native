import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import Header from '../components/navigation/Header';
import FilterBooks from '../components/books/Filter';

import {getToken} from '../components/accounts/helpers';

const Reset = ({navigation, getToken}) => {
  getToken();
  return (
    <View>
      <Header toggleScreen={navigation.toggleDrawer} />
      <FilterBooks navigate={navigation.navigate} />
    </View>
  );
};

export default connect(
  null,
  {getToken},
)(Reset);

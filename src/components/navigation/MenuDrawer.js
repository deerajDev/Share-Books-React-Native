import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuDrawer = ({navigation, authenticated}) => {
  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };

  const NavigationLink = (route, text) => {
    return (
      <TouchableOpacity onPress={navigateToScreen(route)}>
        <Text style={styles.navigationLink}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerIconContainer}>
        <Icon name="md-home" size={35} style={styles.drawerIcon} />
      </View>
      <View style={styles.navigationLinkContainer}>
        {NavigationLink('Home', 'Home')}
        {NavigationLink('SellBook', 'Sell Book')}
        {authenticated ? NavigationLink('MyBooks', 'My Books') : null}
        {authenticated ? null : NavigationLink('SignUp', 'Sign-Up')}
        {NavigationLink('Reset', 'Filter')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  drawerIconContainer: {
    paddingVertical: 3,
    backgroundColor: '#c5e3cd',
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  drawerIcon: {
    color: '#4c5be0',
  },
  navigationLinkContainer: {
    backgroundColor: '#0984e3',
    flex: 1,
  },
  navigationLink: {
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    paddingLeft: 25,
    marginBottom: 5,
    color: '#dfe6e9',
  },
});

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  token: state.auth.token,
});

export default connect(
  mapStateToProps,
  {},
)(MenuDrawer);

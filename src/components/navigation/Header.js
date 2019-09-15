import React from 'react';
import {View, StyleSheet} from 'react-native';
import MenuButton from './MenuButton';

const Header = ({toggleScreen, ExtraComponent}) => {
  let RightComponent = null;
  if (ExtraComponent) {
    RightComponent = <ExtraComponent />;
  }
  return (
    <View style={styles.headerContainer}>
      <MenuButton toggleScreen={toggleScreen} />
      {RightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0984e3',
  },
});

export default Header;

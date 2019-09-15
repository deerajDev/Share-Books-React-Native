import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const MenuButton = ({toggleScreen}) => {
  return (
    <View>
      <Icon
        name="md-menu"
        size={35}
        style={styles.icon}
        onPress={toggleScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'white',
    opacity: 0.9,
    paddingLeft: 10,
  },
});

export default MenuButton;

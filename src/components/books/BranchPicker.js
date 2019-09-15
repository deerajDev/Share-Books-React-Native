import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const BranchPicker = ({branch, setBranch}) => {
  const brachChoices = [
    {
      value: 'Mechanical',
    },
    {
      value: 'Computer Science',
    },
    {
      value: 'Information science',
    },
    {
      value: 'Electrical',
    },
    {
      value: 'Biotechnology',
    },
    {
      value: 'Chemical',
    },
    {
      value: 'Industrial and Management',
    },
    {
      value: 'Medical Electronics',
    },
    {
      value: 'All',
    },
  ];
  return (
    <View style={styles.dropdown}>
      <Dropdown
        fontSize={20}
        label="Branch"
        textColor="black"
        dropdownPosition={3}
        data={brachChoices}
        onChangeText={input => setBranch(input)}
        value={branch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: '90%',
    paddingLeft: 20,
    marginTop: 0,
    paddingTop: 0,
  },
});

export default BranchPicker;

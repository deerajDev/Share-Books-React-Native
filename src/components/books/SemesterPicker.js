import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const SemesterPicker = ({semester, setSemester}) => {
  const semesterChoices = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
    {
      value: 6,
    },
    {
      value: 7,
    },
    {
      value: 8,
    },
  ];
  return (
    <View style={styles.dropdown}>
      <Dropdown
        fontSize={20}
        label="Semester"
        data={semesterChoices}
        value={semester}
        onChangeText={input => setSemester(input)}
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

export default SemesterPicker;

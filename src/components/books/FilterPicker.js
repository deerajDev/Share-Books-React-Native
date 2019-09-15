import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const FilterPicker = ({ branch, setBranch }) => {
	const brachChoices = [
		{
			value: 'Cost low-high'
		},
		{
			value: 'Cost high-low'
		},
		{
			value: ''
		},
		{
			value: 'cs'
		},
		{
			value: 'is'
		}
	];
	return (
		<View style={styles.dropdown}>
			<Dropdown
				fontSize={20}
				label="Branch"
				textColor="black"
				dropdownPosition={3}
				data={brachChoices}
				onChangeText={(input) => setBranch(input)}
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
		paddingTop: 0
	}
});

export default FilterPicker;

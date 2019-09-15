import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TextInput, StyleSheet} from 'react-native';
import {filterBooks} from '../../store/actions/book';

const SearchBar = ({filterBooks}) => {
  const [searchText, setSearchText] = useState('');
  const dispatchFilter = input => {
    setSearchText(input);
    filterBooks(input);
  };
  return (
    <View>
      <TextInput
        value={searchText}
        onChangeText={input => dispatchFilter(input)}
        placeholder="book name or author name.."
        placeholderTextColor="#615b5b"
        style={styles.input}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 40,
    width: 190,
    margin: 6,
    borderRadius: 18,
    paddingTop: 10,
    paddingHorizontal: 13,
    backgroundColor: '#e1ebe2',
    fontSize: 14,
    color: '#2d3436',
  },
});

export default connect(
  null,
  {filterBooks},
)(SearchBar);

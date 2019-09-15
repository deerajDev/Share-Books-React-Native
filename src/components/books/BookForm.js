import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BrachPicker from './BranchPicker';
import SemesterPicker from './SemesterPicker';

const BookForm = ({
  bookName,
  setBookName,
  author,
  setAuthor,
  branch,
  setBranch,
  semester,
  setSemester,
  cost,
  setCost,
  validate,
  title,
}) => {
  return (
    <View behavior="padding" style={styles.container}>
      <TextInput
        value={bookName}
        onChangeText={input => setBookName(input)}
        placeholder="Book Name"
        placeholderTextColor="#615b5b"
        returnKeyType="next"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        value={author}
        onChangeText={input => setAuthor(input)}
        placeholder="Author Name"
        placeholderTextColor="#615b5b"
        returnKeyType="next"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        value={cost}
        onChangeText={input => setCost(input)}
        placeholder="Cost"
        placeholderTextColor="#615b5b"
        returnKeyType="next"
        keyboardType="numeric"
        style={styles.input}
      />
      <SemesterPicker semester={semester} setSemester={setSemester} />
      <BrachPicker branch={branch} setBranch={setBranch} />
      <TouchableOpacity style={styles.buttonContainer} onPress={validate}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    height: 40,
    margin: 6,
    borderRadius: 18,
    paddingHorizontal: 13,
    backgroundColor: '#bfbbac',
    fontSize: 18,
    color: '#2d3436',
  },
  buttonContainer: {
    backgroundColor: '#2657de',
    height: 35,
    borderRadius: 20,
    width: '95%',

    marginLeft: 8,
    marginBottom: 20,
    marginTop: 4,

    paddingHorizontal: 13,
    paddingTop: 10,
    paddingBottom: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
    color: '#dfe6e9',
  },
});

export default BookForm;

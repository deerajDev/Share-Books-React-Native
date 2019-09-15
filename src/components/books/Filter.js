import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import SemesterPicker from './SemesterPicker';
import BranchPicker from './BranchPicker';
import {getBooks} from '../../store/actions/book';

const FilterBooks = ({navigate, getBooks}) => {
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');

  const validate = () => {
    if (!semester || !branch || !college) {
      //FIXME: alert or snap should be used here
      Alert.alert('Error', 'Please provide the valid data');
    } else {
      getBooks(college, branch, semester);

      return navigate('Home');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Filter Books</Text>
      <TextInput
        value={college}
        onChangeText={input => setCollege(input)}
        placeholder="Search College .Ex:MSRIT"
        placeholderTextColor="#615b5b"
        returnKeyType="next"
        autoCapitalize="characters"
        style={styles.input}
      />

      <SemesterPicker setSemester={setSemester} value={semester} />
      <BranchPicker setBranch={setBranch} value={branch} />

      <TouchableOpacity style={styles.buttonContainer} onPress={validate}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 10,
  },
  input: {
    height: 40,
    margin: 6,
    borderRadius: 18,
    paddingHorizontal: 13,
    backgroundColor: '#bfbbac',
    fontSize: 18,
    color: '#2d3436',
    width: '85%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    backgroundColor: '#2657de',
    height: 30,
    borderRadius: 20,
    width: '90%',

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

export default connect(
  null,
  {getBooks},
)(FilterBooks);

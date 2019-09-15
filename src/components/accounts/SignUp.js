import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import {validateCollege, validateNumber, validateEmail} from './helpers';

import {signUp} from '../../store/actions/auth';

const SignUp = ({signUp, navigate, authenticated}) => {
  //state management variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [loading, setLoading] = useState(false);

  //function to validate the input
  const validate = () => {
    Keyboard.dismiss();
    if (
      // eslint-disable-next-line no-bitwise
      validateEmail(email) &
      validateCollege(college) &
      validateNumber(contactNum)
    ) {
      signUp(email, password, college, contactNum);
      setLoading(true);
    }
  };

  //check for token in localStorage
  if (authenticated) {
    navigate('SellBook');
    return <View />;
  } else if (loading) {
    //check for loading state
    return <ActivityIndicator size="large" color="#fc0373" />;
  }

  //main component

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.title}>Sign-Up</Text>
      <TextInput
        value={email}
        onChangeText={input => setEmail(input)}
        placeholder="Email"
        placeholderTextColor="#827675"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={() => contactNumberInput.focus()}
        style={styles.input}
      />
      <TextInput
        value={contactNum}
        onChangeText={input => setContactNum(input)}
        placeholder="Contact Number"
        placeholderTextColor="#827675"
        returnKeyType="next"
        keyboardType="number-pad"
        autoCapitalize="none"
        ref={input => (contactNumberInput = input)}
        onSubmitEditing={() => collegeInput.focus()}
        style={styles.input}
      />
      <TextInput
        value={college}
        onChangeText={input => setCollege(input)}
        placeholder="College, Ex- MSRIT"
        placeholderTextColor="#827675"
        returnKeyType="next"
        autoCapitalize="characters"
        ref={input => (collegeInput = input)}
        onSubmitEditing={() => passwordInput.focus()}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={input => setPassword(input)}
        placeholder="Password"
        placeholderTextColor="#827675"
        returnKeyType="go"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        ref={input => (passwordInput = input)}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={validate}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerContainer}
        onPress={() => navigate('Login')}>
        <Text style={styles.footer}>
          Have an account?
          <Text style={{fontWeight: 'bold', fontSize: 18}}> Login</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0984e3',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
  },
  input: {
    height: 40,
    margin: 6,
    borderRadius: 18,
    paddingHorizontal: 13,
    backgroundColor: 'rgba(255,255,255,0.7)',
    fontSize: 18,
    color: '#2d3436',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 5,
    color: '#dfe6e9',
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
  footerContainer: {
    marginTop: 0,
    marginBottom: 23,
    paddingBottom: 4,
    alignItems: 'center',
  },
  footer: {
    fontSize: 17,
    color: '#ccc9c0',
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  loading: state.message.loading,
});

export default connect(
  mapStateToProps,
  {signUp},
)(SignUp);

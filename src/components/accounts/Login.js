import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import {login} from '../../store/actions/auth';
import {validateEmail} from './helpers';

const Login = ({login, navigate, authenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    if (!validateEmail(email) || !password) {
      //FIXME: error message not shown
      return Alert.alert('Error', 'Invalid data');
    }
    login(email, password);
    setLoading(true);
  };

  if (authenticated) {
    return navigate('Reset');
  } else if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#323ca8"
        style={{paddingVertical: 40}}
      />
    );
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        onChangeText={input => setEmail(input)}
        placeholder="Email"
        placeholderTextColor="#827675"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
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
        onPress={() => navigate('SignUp')}>
        <Text style={styles.footer}>
          Don't have an account?
          <Text style={{fontWeight: 'bold', fontSize: 18}}> Sign-Up </Text>
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
    marginBottom: 35,
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
});

export default connect(
  mapStateToProps,
  {login},
)(Login);

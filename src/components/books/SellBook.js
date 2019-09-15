import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from './ImagePicker';
import BookForm from './BookForm';
import {uploadBook} from '../../store/actions/book';

const SellBook = ({navigate, authenticated, uploadBook, uploadDone, token}) => {
  if (!authenticated) {
    return navigate('SignUp');
  }
  const [image, setImage] = useState(null);
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [cost, setCost] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!image || !bookName || !author || !branch || !semester || !cost) {
      Alert.alert('Error', 'please provide all the information');
      return;
    }
    setLoading(true);
    uploadBook(image, bookName, author, branch, semester, cost, token);
    setImage(null);
    setBookName('');
    setAuthor('');
    setBranch('');
    setCost('');
    setSemester('');
  };

  //main body
  const returnBody = (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
      <ScrollView>
        <Text style={styles.title}>Details</Text>
        <ImagePicker image={image} setImage={setImage} />
        <BookForm
          bookName={bookName}
          setBookName={setBookName}
          author={author}
          setAuthor={setAuthor}
          branch={branch}
          setBranch={setBranch}
          semester={semester}
          setSemester={setSemester}
          cost={cost}
          setCost={setCost}
          validate={validate}
          title={'Upload'}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );

  if (uploadDone) {
    return returnBody;
  } else if (loading) {
    return <ActivityIndicator size="large" color="#424bf5" />;
  } else {
    return returnBody;
  }
};

const styles = StyleSheet.create({
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
    color: '#2b2a2a',
  },
});

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  token: state.auth.token,
  uploadDone: state.books.uploadDone,
});

export default connect(
  mapStateToProps,
  {uploadBook},
)(SellBook);

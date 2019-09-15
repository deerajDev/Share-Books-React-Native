import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Text, Image, StyleSheet, Alert} from 'react-native';
import {Card, CardItem, Left, Right} from 'native-base';
import {Switch} from 'react-native-switch';
import BookForm from './BookForm';
import {updateBook} from '../../store/actions/book';

const UpdateCard = ({book, updateBook, token}) => {
  const [bookName, setBookName] = useState(book.book_name);
  const [branch, setBranch] = useState(book.branch);
  const [author, setAuthor] = useState(book.author);
  const [semester, setSemester] = useState(book.semester);
  const [available, setAvailable] = useState(book.available);
  const [cost, setCost] = useState(String(book.cost));
  const validate = () => {
    if (!bookName || !author || !branch || !semester || !cost) {
      Alert.alert('Error', 'please provide all the information');
      return;
    }
    updateBook(
      bookName,
      author,
      branch,
      semester,
      cost,
      available,
      book.id,
      token,
    );
  };

  return (
    <Card>
      <CardItem cardBody>
        <Image source={{uri: book.image}} style={styles.image} />
      </CardItem>
      <CardItem>
        <Left>
          <Text style={styles.infoTextTitle}>Available</Text>
        </Left>
        <Right>
          <Switch
            value={available}
            onValueChange={val => setAvailable(val)}
            activeText={'Yes'}
            inActiveText={'No'}
          />
        </Right>
      </CardItem>
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
        title={'Update'}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 500,
    width: null,
    flex: 1,
  },
  infoTextTitle: {
    fontWeight: '900',
    fontSize: 16,
    paddingRight: 6,
  },
  infoText: {
    fontSize: 15,
  },
});

export default connect(
  null,
  {updateBook},
)(UpdateCard);

import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {Content} from 'native-base';
import UpdateCard from './UpdateCard';
import {loadMyBooks, loadMoreMyBooks} from '../../store/actions/book';

const MyBooksList = ({myBooks, loadMyBooks, loadMoreMyBooks, next, token}) => {
  useEffect(() => {
    loadMyBooks(token);
  }, []);

  if (!myBooks[0]) {
    return <ActivityIndicator size="large" color="#424bf5" />;
  } else {
    if (next) {
      loadMoreMyBooks(next, token);
    }
    return (
      <Content>
        {myBooks.map(book => (
          <UpdateCard key={book.id} book={book} token={token} />
        ))}
      </Content>
    );
  }
};

const mapStateToProps = state => ({
  myBooks: state.books.myBooks,
  next: state.books.myBookNext,
  token: state.auth.token,
});
export default connect(
  mapStateToProps,
  {loadMyBooks, loadMoreMyBooks},
)(MyBooksList);

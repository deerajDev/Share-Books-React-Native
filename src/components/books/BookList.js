import React from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {Content} from 'native-base';
import BookCard from './Card';
import {loadMoreBooks} from '../../store/actions/book';

const BookList = ({next, books, loadMoreBooks}) => {
  if (!books[0]) {
    return <ActivityIndicator size="large" color="#424bf5" />;
  } else {
    if (next) {
      loadMoreBooks(next);
    }
    return (
      <Content>
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </Content>
    );
  }
};

const mapStateToProps = state => ({
  next: state.books.next,
  books: state.books.filteredBooks,
});

export default connect(
  mapStateToProps,
  {loadMoreBooks},
)(BookList);

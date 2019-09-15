import React from 'react';
import {Container} from 'native-base';
import Header from '../components/navigation/Header';
import SearchBar from '../components/navigation/SearchBar';
import BookList from '../components/books/BookList';

const Home = ({navigation}) => {
  return (
    <Container>
      <Header
        toggleScreen={navigation.toggleDrawer}
        ExtraComponent={SearchBar}
      />
      <BookList />
    </Container>
  );
};

export default Home;

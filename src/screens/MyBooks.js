import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import Header from '../components/navigation/Header';
import MyBookList from '../components/books/MyBooksList';

const MyBooks = ({ navigation }) => {
	return (
		<Container>
			<Header toggleScreen={navigation.toggleDrawer} />
			<MyBookList />
		</Container>
	);
};

export default MyBooks;

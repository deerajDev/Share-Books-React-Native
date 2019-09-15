import React from 'react';
import { View, Text } from 'react-native';
import { Content, Container } from 'native-base';
import Book from '../components/books/SellBook';
import Header from '../components/navigation/Header';
const SellBook = ({ navigation }) => {
	return (
		<Container>
			<Header toggleScreen={navigation.toggleDrawer} />
			<Content>
				<Book navigate={navigation.navigate} />
			</Content>
		</Container>
	);
};

export default SellBook;

import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {Card, CardItem, Left, Right, Icon} from 'native-base';
import call from 'react-native-phone-call';

const BookCard = ({book}) => {
  const {book_name, image, author, cost, owner} = book;

  return (
    <Card>
      <CardItem cardBody>
        <Image source={{uri: image}} style={styles.image} />
      </CardItem>
      <CardItem
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.infoTextTitle}>Book Name:</Text>
        <Text style={styles.infoText}>{book_name}</Text>
      </CardItem>

      <CardItem
        style={{
          flexDirection: 'row',
          height: 10,
        }}>
        <Text style={styles.infoTextTitle}>Author:</Text>
        <Text style={styles.infoText}>{author}</Text>
      </CardItem>

      <CardItem>
        <Left>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 16,
            }}>
            Rs: <Text>{cost}</Text>
          </Text>
        </Left>
        <Right
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Icon name="md-call" size={20} color="black" />
          <Text
            style={{
              fontWeight: '900',
            }}
            onPress={() =>
              call({
                number: String(owner.contact_num),
                prompt: false,
              }).catch(console.error)
            }>
            {owner.contact_num}
          </Text>
        </Right>
      </CardItem>
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

export default BookCard;

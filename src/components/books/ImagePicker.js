import React from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ImageUpload = ({image, setImage}) => {
  const options = {
    title: 'Select Book Photo',
    takePhotoButtonTitle: 'Take a pic',
    chooseFromLibraryButtonTitle: 'Choose from library',
  };

  const takeImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        Alert.alert('Error', 'You cancelled the image upload');
      } else if (response.error) {
        Alert.alert('Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        setImage(source);
      }
    });
  };
  return (
    <View>
      {image && <Image source={{uri: image.uri}} style={styles.imageStyle} />}
      <TouchableOpacity onPress={takeImage}>
        <Text style={styles.text}>
          {image ? 'Change Image' : 'Upload an Image'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 40,
    margin: 6,
    borderRadius: 18,
    paddingHorizontal: 13,
    paddingTop: 4,
    backgroundColor: '#bfbbac',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
    textAlign: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 500,
  },
});

export default ImageUpload;

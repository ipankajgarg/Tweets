import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Card({data: {title, imageUri, content}}) {
  const {container, heading, about, image} = styles;

  return (
    <View style={container}>
      <Text style={heading}>{title}</Text>
      <Image
        style={image}
        source={{
          uri: imageUri,
        }}
      />
      <Text style={about}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderTopColor: 'lightgrey',
    borderBottomColor: 'lightgrey',
    borderTopWidth: 1,
    borderBottomWidth: 4,
  },
  heading: {
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  image: {
    height: 200,
    width: '100%',
    marginVertical: 5,
  },
  about: {
    marginHorizontal: 10,
  },
});

export default Card;

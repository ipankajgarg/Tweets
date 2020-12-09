import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Logo() {
  const {logo} = styles;

  return (
    //<View>
    <Text style={logo}>Tweets</Text>
    //</View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 40,
    color: '#1890ff',
  },
});

export default Logo;

import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

console.log(StatusBar.height);

function Header() {
  const {container, title} = styles;

  return (
    <SafeAreaView>
      <View style={container}>
        <View>
          <Text>Back</Text>
        </View>
        <View>
          <Text style={title}>Some Content</Text>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: StatusBar.currentHeight || 0,
    borderBottomColor: 'lightgrey', // if you need
    borderBottomWidth: 0.5,
  },
  title: {
    color: '#1890ff',
    fontSize: 18,
  },
});

export default Header;

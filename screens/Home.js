import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../components/common/Logo';

function Home() {
  console.log('changes');
  const {logoContainer, container} = styles;
  return (
    <View style={container}>
      <View style={logoContainer}>
        <Logo />
      </View>

      <View>
        <Text>Sign in with google</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
});

export default Home;

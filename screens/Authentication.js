import React, {useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Authentication() {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('isLoggedIn', (err, result) => {
      console.log(err, result);
      if (!result) {
        return navigation.navigate('Dashboard');
      }
      navigation.navigate('Home');
    });
  });

  return <View style={{flex: 1, backgroundColor: 'white'}}></View>;
}

export default Authentication;

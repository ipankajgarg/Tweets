/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';

// function HomeScreen(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text onPress={() => props.navigation.navigate('Dashborad')}>
//         {' '}
//         My Home Screen
//       </Text>
//     </View>
//   );
// }
function MyBlogsScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => props.navigation.navigate('AllBlogs')}>
        {' '}
        My Blogs
      </Text>
    </View>
  );
}
function AllBlogsScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => props.navigation.navigate('CreateBlogs')}>
        {' '}
        All Blogs Screen
      </Text>
    </View>
  );
}
function CreateBlogsScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => props.navigation.navigate('MyBlogs')}>
        {' '}
        CreateBlogs
      </Text>
    </View>
  );
}

function DashboradScreen(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyBlogs" component={MyBlogsScreen} />
      <Tab.Screen name="AllBlogs" component={AllBlogsScreen} />
      <Tab.Screen name="CreateBlogs" component={CreateBlogsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashborad" component={DashboradScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;

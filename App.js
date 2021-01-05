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
import AllTweetsScreen from './screens/AllTweets';
import CreateTweetScreen from './screens/CreateTweet';
import PN from './screens/PN';

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
// function AllBlogsScreen(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text onPress={() => props.navigation.navigate('CreateBlogs')}>
//         {' '}
//         All Blogs Screen
//       </Text>
//     </View>
//   );
// }
function CreateBlogsScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => props.navigation.navigate('AllBlogs')}>
        {' '}
        CreateBlogs
      </Text>
    </View>
  );
}

function DashboradScreen(props) {
  return (
    <Tab.Navigator detachInactiveScreens={false} style={{fontSize: 20}}>
      {/* <Tab.Screen name="MyBlogs" component={MyBlogsScreen} /> */}
      <Tab.Screen
        name="AllBlogs"
        component={AllTweetsScreen}
        tabStyle={{fontSize: 20}}
      />
      <Tab.Screen
        name="CreateBlogs"
        component={CreateTweetScreen}
        tabStyle={{fontSize: 20}}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="PN"
            component={PN}
            options={{title: 'Push Notification'}}
            // options={{headerShown: false}}
          />

          <Stack.Screen
            name="Dashborad"
            component={DashboradScreen}
            // options={{title: 'All Blogs'}}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default App;

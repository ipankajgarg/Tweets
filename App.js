/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import AllTweetsScreen from './screens/AllTweets';
import CreateTweetScreen from './screens/CreateTweet';
import PN from './screens/PN';
import Authentication from './screens/Authentication';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import axios from 'axios';

// function HomeScreen(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text onPress={() => props.navigation.navigate('Dashboard')}>
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

function DashboardScreen(props) {
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

class App extends Component {
  constructor() {
    super();
    PushNotification.checkPermissions(function(pemission) {
      console.log('perrmission', pemission);
    });

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token);
        axios
          .post('http://localhost:5000/token', {token: token.token})
          .then(() => console.log('success'))
          .catch(err => {
            console.log(err);
          });
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
        console.log('LOCAL NOTIFICATION ==>', notification);
        console.log('need to navigate');
        if (notification.userInteraction) {
          AsyncStorage.setItem(
            'notification',
            JSON.stringify(notification),
            (err, result) => {
              console.log('storage notification', err, result);
              AsyncStorage.getItem('notification', (errr, result) => {
                console.log(err, result);
              });
            },
          );
          // navigation.navigate('Home');
        }

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function(notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
            name="PN"
            component={PN}
            options={{title: 'Push Notification'}}
            // options={{headerShown: false}}
          /> */}
            <Stack.Screen
              name="Authentication"
              component={Authentication}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default App;

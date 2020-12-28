import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/common/Header';
import Card from '../components/common/Card';
import axios from 'axios';

function AllTweets() {
  const [tweets, setTweets] = useState({data: [], isLoading: false});
  const navigation = useNavigation();
  const {container, loader} = styles;

  useEffect(() => {
    console.log('changes');
    (async function fetchTweets() {
      setTweets({...setTweets, isLoading: true});
      const data = await axios.get('http://localhost:3000/tweets');
      setTweets({...setTweets, data: data.data, isLoading: false});
    })();
  }, [navigation]);

  const renderTweets = tweet => {
    console.log(tweet);
    return <Card data={tweet.item} key={tweet.id} />;
  };

  return (
    <ScrollView style={container}>
      <View>
        <Header heading="All Tweets" />
        {tweets.isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={tweets.data}
            renderItem={renderTweets}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default AllTweets;

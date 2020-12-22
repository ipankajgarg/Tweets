import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/common/Header';
import Card from '../components/common/Card';
import axios from 'axios';

function AllBlogs() {
  const [tweets, setTweets] = useState({data: [], isLoading: false});
  const {container, loader} = styles;

  useEffect(() => {
    (async function fetchTweets() {
      setTweets({...setTweets, isLoading: true});
      const data = await axios.get('http://localhost:3000/tweets');
      setTweets({...setTweets, data: data.data, isLoading: false});
    })();
  }, []);

  const renderTweets = tweet => {
    console.log(tweet);
    return <Card data={tweet.item} key={tweet.id} />;
  };

  return (
    <ScrollView style={container}>
      <View>
        <Header />
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
export default AllBlogs;

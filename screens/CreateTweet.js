import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Header from '../components/common/Header';

const IMAGE_URI =
  'https://urbanmatter.com/chicago/wp-content/uploads/2019/10/shutterstock_1434827354.jpg';

const {ImagePickerModule} = NativeModules;

console.log(ImagePickerModule);

function InputHook(state = '') {
  const [text, setText] = useState(state);

  function onChangeText(val) {
    setText(val);
  }
  return [text, onChangeText];
}

function CreateTweet() {
  const [title, onChangeTitle] = InputHook('');
  const [content, onChangeContent] = InputHook('');
  const navigation = useNavigation();

  async function onCreate() {
    // const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
    // console.log('some default name vhjvhv', DEFAULT_EVENT_NAME);

    try {
      const eventId = await ImagePickerModule.pickImage();
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }

    // try {
    //   const res = await axios.post('http://localhost:3000/tweets', {
    //     title,
    //     content,
    //     imageURI: IMAGE_URI,
    //   });
    //   // onChangeContent('');
    //   // onChangeTitle('');
    //   setTimeout(function() {
    //     axios.post('http://localhost:5000/', {title, content});
    //   }, 1000);
    //   navigation.navigate('AllBlogs');
    // } catch (err) {
    //   console.log('some error', err);
    // }
  }

  const {
    container,
    formContainer,
    input,
    label,
    button,
    buttonText,
    buttonContainer,
  } = styles;

  return (
    <View style={container}>
      <Header heading="What's in you mind" />
      <View style={formContainer}>
        <Text style={label}>Title</Text>
        <TextInput
          onChangeText={text => onChangeTitle(text)}
          style={input}
          value={title}
        />
        <Text style={label}>Content</Text>
        <TextInput
          style={input}
          onChangeText={text => onChangeContent(text)}
          value={content}
        />
      </View>
      <View style={buttonContainer}>
        <TouchableOpacity style={button} onPress={onCreate}>
          <Text style={buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 50,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1890ff',
    padding: 20,
    color: 'white',
    width: '50%',
    borderRadius: 10,
    margin: 'auto',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default CreateTweet;

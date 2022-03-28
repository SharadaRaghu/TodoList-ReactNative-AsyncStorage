import React, {useState, useEffect} from 'react';
import {StatusBar, ActivityIndicator, ImageBackground} from 'react-native';
import {Container} from './styles/appStyles'; //styled components
import Home from './components/Home';
//async imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

//async storage works using key-value pairs, i.e if u want to use async storage, it can be done using a key.
//this key helps in accessing data we've stored
//we store our todo in async storage, in this case, and we give it a key of stored todos
//if there is data in key, we fetch that data and set it as the state of todos

export default function App() {
  const [ready, setReady] = useState(false);
  //initial todos
  const initialTodos = [];

  useEffect(() => {
    AsyncStorage.getItem('storedTodos')
      .then(data => {
        if (data !== null) {
          //to fetch todos we use settodos
          setTodos(JSON.parse(data));

          setReady(true);
        } else {
          setReady(true);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const [todos, setTodos] = useState(initialTodos);

  //async storage checks for data, returns promise i.e .then ,
  //if data not null can work with it
  //async storage works by storing only strings, even if want to store array of objects, stringify using json

  if (!ready) {
    //if app not ready use splashccreen
    return (
      <ActivityIndicator
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 320,
        }}
      />
    );
  }

  return (
    <Container>
      <ImageBackground
        source={require('./styles/1.jpeg')}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',

          flexWrap: 'wrap',
        }}>
        <Home todos={todos} setTodos={setTodos} />
      </ImageBackground>
      <StatusBar style="light" />
    </Container>
  );
}

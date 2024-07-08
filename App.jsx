// App.js
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/Screens/Home';
import 'react-native-gesture-handler';

import Router from './src/navigation/Router';

//const post1 = feed[0];

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

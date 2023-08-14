import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View>
      <HomeScreen />
      <StatusBar backgroundColor="#9ee4d4" barStyle="light-content" />
    </View>
  );
};

export default App;

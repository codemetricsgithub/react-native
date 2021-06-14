import React from 'react';
import {View, Text} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <View>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

export default App;

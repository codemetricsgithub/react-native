import React from 'react';
import Scrollviews from './src/pages/Scrollviews';
import {View, Text} from 'react-native';
import Stylesheet from './src/pages/Stylesheet';

const App = () => {
  return (
    <>
      <Stylesheet />
      <Scrollviews />
    </>
  );
};

export default App;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [buttonOpacity, setButtonOpacity] = useState(1);
  return (
    <TouchableOpacity
      onPressIn={() => setButtonOpacity(0.5)}
      onPressOut={() => setButtonOpacity(1)}>
      <View style={{opacity: buttonOpacity}}>
        <Text>Press me!</Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;

import {View, Text, LogBox} from 'react-native';
import React from 'react';
import FlatListCalculator from './src/FlatListCalculator';
import TestCalc from './src/TestCalc';

const log = LogBox.ignoreAllLogs()
const App = () => {
  return (
    <View style={{flex: 1}}>
      <FlatListCalculator />
    </View>
  );
};

export default App;

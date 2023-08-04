import {View, Text} from 'react-native';
import React from 'react';
import TailwindTest from './src/TailwindTest';
import FlatListCalculator from './src/FlatListCalculator';
import {CalculatorInput} from 'react-native-calculator';
// import { Calculator } from 'react-native-calculator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <TailwindTest /> */}
      {/* <Calculator /> */}
      <FlatListCalculator />
    </View>
  );
};

export default App;

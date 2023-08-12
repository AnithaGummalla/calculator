import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import data from './calcData';
import Output from './Output';

const TestCalc = () => {
  const [current, setCurrent] = useState('0');
  const [prev, setPrev] = useState('0');
  const [operand, setOperand] = useState('sum');

  const calculation = (title: any, operation: any, type: any) => {
    if (title === 'AC') {
      setCurrent('0');
      setPrev('0');
    }
    //  else if (type === 'num') {
    //   setCurrent(current === '0' ? title : current + title);
    // }
    else if (type === 'operation') {
      setPrev(current);
      setCurrent('0');
      switch (operation) {
        case 'sum':
          console.log('sum');
          setOperand('sum');
          break;
        case 'minus':
          console.log('subtract');

          break;
        case 'mul':
          console.log('multiply');
          break;
        case 'divide':
          console.log('division');
          break;

        default:
          break;
      }
      if (operand === 'sum') {
        console.log('current', current);
      }
    } else {
      setCurrent(current === '0' ? title : current + title);
    }
  };
  return (
    <View>
      <Output val={current} />
      <View>
        <FlatList
          numColumns={4}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => calculation(item.title, item.operation, item.type)}
              key={item.id}
              className="rounded-full h-[10vh] items-center justify-center m-2"
              style={{backgroundColor: item.bg, width: item.width}}>
              <Text style={{color: item.color, fontSize: 40}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default TestCalc;

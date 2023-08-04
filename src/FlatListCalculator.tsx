import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
const calc = [
  {
    id: 1,
    title: 'AC',
    bg: 'white',
    color: 'black',
    width: 80,
    height: 80,
  },
  {
    id: 2,
    title: '±',
    bg: 'white',
    color: 'black',
    width: 80,
    height: 80,
    type: 'operation',
    operation: 'negative',
  },
  {
    id: 3,
    title: '%',
    bg: 'white',
    color: 'black',
    width: 80,
    height: 80,
    type: 'operation',
    operation: 'mod',
  },
  {
    id: 4,
    title: '÷',
    bg: 'orange',
    color: 'white',
    width: 80,
    height: 80,
    type: 'operation',
    operation: 'divide',
  },
  {
    id: 5,
    title: '1',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 6,
    title: '2',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 7,
    title: '3',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 8,
    title: 'x',
    bg: 'orange',
    color: 'white',
    width: 80,
    height: 80,
    type: 'operation',
    operation: 'mul',
  },
  {
    id: 9,
    title: '4',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 10,
    title: '5',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 11,
    title: '6',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 12,
    title: '-',
    bg: 'orange',
    color: 'white',
    width: 80,
    height: 80,
    type: 'operation',
    operation: 'minus',
  },
  {
    id: 13,
    title: '7',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 14,
    title: '8',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 15,
    title: '9',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 16,
    title: '+',
    bg: 'orange',
    color: 'white',
    width: 80,
    height: 80,
    type: 'operation',
    operation: 'sum',
  },
  {
    id: 17,
    title: '0',
    bg: '#555555',
    color: 'white',
    width: 165,
    height: 80,
    type: 'num',
  },
  {
    id: 17,
    title: '.',
    bg: '#555555',
    color: 'white',
    width: 80,
    height: 80,
    type: 'num',
  },
  {
    id: 17,
    title: '=',
    bg: 'orange',
    color: 'white',
    width: 80,
    height: 80,
    type: 'operation',
    operation: 'equal to',
  },
];

const FlatListCalculator = () => {
  const [operations, setOperations] = useState('equal to');
  const [prev, setPrev] = useState('0');
  const [current, setCurrent] = useState('0');
  const [neg, setNeg] = useState(true);

  const display = (num: any, type: any, operator: any) => {
    if (num == 'AC') {
      setPrev('0');
      setCurrent('0');
    } else if (type == 'num') {
      setCurrent(current === '0' ? num : current + num);
    } else if (type == 'operation') {
      setPrev(current);
      setCurrent('0');
      setOperations(operator);
    }
  };
  const output = (oper: any) => {
    let z;
    let x = Number(prev);
    let y = Number(current);

    switch (operations) {
      case 'sum':
        z = x + y;
        setCurrent(Number(z));
        break;
      case 'minus':
        z = x - y;
        setCurrent(Number(z));
        break;
      case 'divide':
        z = x / y;
        setCurrent(Number(z));
        break;
      case 'mul':
        z = x * y;
        setCurrent(Number(z));
        break;

      default:
        break;
    }
  };
  const modulus = (num: any) => {
    let x = Number(current);
    // console.log(x / 100);
    setCurrent(x / 100);
  };
  const negative = (num: any) => {
    console.log('negative');
    setNeg(!neg);
    neg ? setCurrent(-num) : setCurrent(num);
  };
  return (
    <View>
      <View className="h-[40vh]">
        <View>
          <Text className="font-bold text-6xl absolute top-64 right-0">
            {current}
          </Text>
        </View>
      </View>
      <View className="flex justify-center items-center">
        <FlatList
          data={calc}
          numColumns={4}
          renderItem={({item}) => (
            <TouchableOpacity
              className="w-[8.5vh] h-[8.5vh] rounded-full items-center justify-center"
              style={{
                backgroundColor: item.bg,
                width: item.width,
                height: item.height,
                margin: 4,
              }}
              onPress={
                item.operation === 'equal to'
                  ? () => output(item.title)
                  : item.operation === 'mod'
                  ? () => modulus(item.title)
                  : item.operation === 'negative'
                  ? () => negative(item.title)
                  : () => display(item.title, item.type, item.operation)
              }
              key={item.id}>
              <Text
                style={{color: item.color}}
                className="text-3xl text-black font-bold">
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default FlatListCalculator;

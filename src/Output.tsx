import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const Output = ({val}:any) => {
  return (
    <View style={{height:Dimensions.get('screen').width/1.3,alignItems:'center'}}>
      <Text>Output</Text>
      <Text className='text-white items-center text-6xl'>{val}</Text>
    </View>
  )
}

export default Output
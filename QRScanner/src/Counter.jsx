import {View, Button, StyleSheet, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={mystyle.container}>
      <StatusBar hidden={true}/>
      <Button title="INC" onPress={() => setCounter(counter + 1)}/>
      <Text
        style={{
          display: 'flex',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign:'center'
        }}>
        {counter}
      </Text>
      <Button title="DEC" onPress={() => setCounter(counter - 1)}/>
    </View>
  );
};

export default Counter;

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

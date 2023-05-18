import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const InputTaking = () => {
  const [inputBoxValue, setInputBoxValue] = useState('india');

  return (
    <View>
      <TextInput
        style={style.inputBox}
        value={inputBoxValue}
        onChangeText={(value) => {setInputBoxValue(value)}}
        
      />
      <View>
        <Text>{inputBoxValue}</Text>
      </View>
    </View>
  );
};

export default InputTaking;

const inputStyle = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
  },
});

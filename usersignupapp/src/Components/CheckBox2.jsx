import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';

const CheckBox2 = () => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <CheckBox
      style={{flex: 1, padding: 10}}
      onClick={() => setIsChecked(!isChecked)}
      rightText="Age More Than 18"

      isChecked={isChecked}
      rightTextStyle={{fontWeight:'bold',fontSize:19,fontColor:'black'}}
      checkBoxColor='green'
      uncheckedBoxColor='red'
      leftText="Age"
      
    />
  );
};

export default CheckBox2;

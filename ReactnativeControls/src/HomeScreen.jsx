import { View, Text } from 'react-native'
import React,{ useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'


const HomeScreen = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [currentValue,setCurrentValue] = useState();
  const items = [
    {label:'Dancing',value:'dancing'},
    {label:'Hiking',value:'hiking'},
    {label:'Cricket',value:'cricket'},
  ]
  
  return (
    <View style={{padding:30}}>
      <DropDownPicker items={items}
      open={isOpen}
      setOpen={() => setIsOpen(isOpen)}
      value={currentValue}
      setValue={(val) => setCurrentValue(val)}
      maxHeight={200}
      autoScroll
      
      placeholder='Select your hobby'
      placeholderStyle={{color:'red',fontWeight:'bold'}}
      showTickIcon={true}
      showArrowIcon={true}
      dropDownDirection='TOP'
      theme='LIGHT'

      multiple={true}
      min={1}
      max={4}
      badgeColors={['red','blue','green']}
      badgeDotColors={['white']}
      badgeTextStyle={{color:'white'}}
      />
    </View>
  )
}

export default HomeScreen
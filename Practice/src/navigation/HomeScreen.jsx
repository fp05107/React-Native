import {View, Text, TouchableOpacity} from 'react-native/types';

function HomeScreen() {
  const handleNavigation = screenName => {
    navigation.navigate(screenName);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <TouchableOpacity
          onPress={() => handleNavigation('Screen1')}
          style={{
            backgroundColor: 'lightblue',
            padding: '30',
          }}></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => handleNavigation('Screen2')}
          style={{
            backgroundColor: 'lightblue',
            padding: '30',
          }}></TouchableOpacity>
      </View>
    </View>
  );
}
export default HomeScreen;

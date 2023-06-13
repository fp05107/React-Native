import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Signup from './Signup';
import IonicIcons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

function Navbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: () =>{
            return <IonicIcons name="home" />
        }
      }} />
      <Tab.Screen name="SignUp" component={Signup} />
    </Tab.Navigator>
  );
}

export default Navbar
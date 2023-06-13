import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('Login');
        },2000)

    }, [])
    const checkLogin = async () =>{
      const id = await AsyncStorage.getItem("USERID");
      if(id !== null){
        navigation.navigate('main');
      }else{
        navigation.navigate('login');
      }
    }
  return (
    <View style={styles.container} >
      <Text style={styles.logo} >Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    logo:{
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
})
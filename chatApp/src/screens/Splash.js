import { StyleSheet, Text, View } from 'react-native'
import React,{ useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('Signup');
        },2000)

    }, [])
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
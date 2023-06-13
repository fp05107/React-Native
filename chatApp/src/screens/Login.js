import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React,{ useState } from 'react';
  import { useNavigation } from '@react-navigation/native'
  

  const Login = () => {
  
      const [name,setName] = useState();
      const [email,setEmail] = useState();
      const [mobile,setMobile] = useState();
      const [password,setPassword] = useState();
      const [confirmPassword,setConfirmPassword] = useState();
      const navigation = useNavigation();
      
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        
        <TextInput
          placeholder="Enter email"
          style={[styles.input, {marginTop: 100}]}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />
      
        <TextInput
          placeholder="Enter password"
          style={[styles.input, {marginTop: 50}]}
          value={password}
          onChangeText={txt => setPassword(txt)}
        />
     
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orLogin} onPress={() => {
        navigation.navigate('Signup')
      }}  >or SignUp</Text>
      </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 30,
      color: 'black',
      alignSelf: 'center',
      marginTop: 100,
      fontWeight: '600',
    },
    input: {
      width: '90%',
      height: 50,
      borderWidth: 0.5,
      borderRadius: 10,
      alignSelf: 'center',
      paddingLeft: 20,
    },
    btn: {
      width: '90%',
      height: 50,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: 'purple',
    },
    btnText: {
      color: 'white',
      fontWeight: '300',
    },
    orLogin: {
      alignSelf: 'center',
      marginTop: 50,
      fontSize: 20,
      textDecorationLine: 'underline',
      fontWeight: '600',
      color: 'black',
    },
  });
  
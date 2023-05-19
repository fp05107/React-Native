import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

const ArrayToList = () => {
  const [data, setData] = useState([
    {id: 1, name: 'subham'},
    {id: 2, name: 'Root'},
    {id: 3, name: 'Buttler'},
    {id: 4, name: 'Morgan'},
    {id: 5, name: 'cook'},
  ]);
  return (
    <View style={styles.customContainer}>
      <ScrollView >
        {data.map((listdata, index) => {
          return (
            <View key={listdata.id}>
              <Text style={styles.customText}>{listdata.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ArrayToList;

const styles = StyleSheet.create({
  container: {
    flex:2,
  },
  customContainer:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'teal',
    
  },
  customText: {
    width:'20%',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'red',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius:20,
    marginBottom: 10,

  },
});

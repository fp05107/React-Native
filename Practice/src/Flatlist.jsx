import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
/**
 * Try Using FlatList Instead of Map
 *
 */
const Flatlist = () => {
  const [data, setData] = useState([
    {id: 1, name: 'subham'},
    {id: 2, name: 'Root'},
    {id: 3, name: 'Buttler'},
    {id: 4, name: 'Morgan'},
    {id: 5, name: 'hey'},
  ]);
  const handleClick = (oldId) =>{
    setData((prevData) =>{
        return prevData.filter(tempData =>{
            if(tempData.id != oldId){
                return tempData;
            }
        })
    })
  }
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleClick()}>
              <Text style={styles.customText}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Flatlist;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  customText: {
    width: '20%',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'red',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
});

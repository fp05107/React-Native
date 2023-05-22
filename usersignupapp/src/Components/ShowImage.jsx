import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ShowImage = () => {
  return (
    <View>
      <Image
        style={styles2.stretch}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_640.jpg',
        }}
      />
      <Image
        style={styles2.stretch}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_640.jpg',
        }}
      />
      <Image
        style={styles2.stretch}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2018/08/19/07/05/background-3616101_640.jpg',
        }}
      />
      <View style={styles2.container}>
        <View style={styles2.row}>
          <View style={styles2.column} />
          <View style={styles2.column} />
          <View style={styles2.column} />
        </View>
        <View style={styles2.row}>
          <View style={styles2.column} />
          <View style={styles2.column} />
          <View style={styles2.column} />
        </View>
        <View style={styles2.row}>
          <View style={styles2.column} />
          <View style={styles2.column} />
          <View style={styles2.column} />
        </View>
      </View>
    </View>
  );
};

export default ShowImage;

const styles2 = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 150,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    margin: 5,
  },
});

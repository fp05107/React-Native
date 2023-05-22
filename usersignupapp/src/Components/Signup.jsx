import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './Styles';
import {DataTable, RadioButton} from 'react-native-paper';
import {getData, postData} from './api';
import axios from 'axios';

const Signup = () => {
  //Drop down picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Select', value: 'Select'},
    {label: 'India', value: 'India'},
    {label: 'USA', value: 'USA'},
    {label: 'China', value: 'China'},
    {label: 'Pakistan', value: 'Pakistan'},
    {label: 'Nepal', value: 'Nepal'},
  ]);

  const handlePress = () => {
    setOpen(!open);
  };

  const [showUser, setShowUser] = useState(false);

  const handleUsersPress = () => {
    //Post data in json server using post request
    postUsers();
  };

  //Table
  const [users, setUsers] = useState([{
    name: 'Rutu',
    age: 20,
    country: 'India',
    gender: 'FeMale',
  }]);

  async function postUsers() {
    await postData({
      name: 'Rutu',
      age: 20,
      country: 'India',
      gender: 'FeMale',
    });
  }
  const [form, setForm] = useState({});

  function fetchUsers() {
    console.log("===================");
    getData().then(res => setUsers(res));
    getData().then(res => console.log(res));
  }

  useEffect(() => {
    fetchUsers(); 
  }, []);

  return (
    <ImageBackground
      style={{flex: 1, resizeMode: 'cover'}}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2017/12/13/16/40/background-3017167_1280.jpg',
      }}>
      {/* <View style={styles.container}> */}
      <TextInput
        keyboardType="name-phone-pad"
        style={styles.textBox}
        placeholder="Enter your name"
      />
      <TextInput style={styles.textBox} placeholder="Enter your age" />
      <TouchableOpacity style={styles.selectItem} onPress={handlePress}>
        <DropDownPicker
          style={styles.dropdownPicker}
          dropDownContainerStyle={styles.dropDownStyle}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </TouchableOpacity>

      <RadioButton.Group
        style={styles.radioButtonGroup}
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.radioButtonText}>Male</Text>
          <RadioButton
            style={styles.radioButton}
            value="first"
            color="#007AFF"
          />
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.radioButtonText}>Female</Text>
          <RadioButton
            style={styles.radioButton}
            value="second"
            color="#007AFF"
          />
        </View>
      </RadioButton.Group>

      <View style={[styles.btnStyle, {}]}>
        <Button
          color="#00FFCA"
          title="Submit"
          onPress={() => handleUsersPress()}
        />
      </View>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
          <DataTable.Title>Country</DataTable.Title>
          <DataTable.Title>Gender</DataTable.Title>
        </DataTable.Header>
        {users.map((user, index) => {
          return (
            <DataTable.Row key={index} style={styles.tableBody}>
              <DataTable.Cell>{user.name}</DataTable.Cell>
              <DataTable.Cell>{user.age}</DataTable.Cell>
              <DataTable.Cell>{user.country}</DataTable.Cell>
              <DataTable.Cell>{user.gender}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
      {/* </View> */}
    </ImageBackground>
  );
};

export default Signup;

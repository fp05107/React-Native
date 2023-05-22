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
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioGroup from 'react-native-radio-buttons-group';
import styles from './Styles';
import {DataTable, RadioButton} from 'react-native-paper';
import {getData, postData} from './api';
import axios from 'axios';
import CheckBox2 from './CheckBox2';
import ShowImage from './ShowImage';

const Signup = () => {
  //Drop down picker

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState(null);
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
    setName('');
    setAge('');
    setValue(null);
    setGender(null);
  };

  //Table
  const [users, setUsers] = useState([
    {
      name: 'Rutu',
      age: 20,
      country: 'India',
      gender: 'FeMale',
    },
    {
      name: 'Subham',
      age: 20,
      country: 'India',
      gender: 'Male',
    },
    {
      name: 'Subhankar',
      age: 18,
      country: 'India',
      gender: 'Male',
    },
    {
      name: 'Subham',
      age: 20,
      country: 'India',
      gender: 'Male',
    },
    {
      name: 'Subhankar',
      age: 18,
      country: 'India',
      gender: 'Male',
    },
    {
      name: 'Subham',
      age: 20,
      country: 'India',
      gender: 'Male',
    },
    {
      name: 'Subhankar',
      age: 18,
      country: 'India',
      gender: 'Male',
    },
  ]);

  async function postUsers() {
    await postData({
      name: 'Rutu',
      age: 20,
      country: 'India',
      gender: 'FeMale',
    });
  }
  const [form, setForm] = useState({});
  useEffect(() => {}, []);

  return (
    <ScrollView>
    <View style={{flex:1}} >
    <ImageBackground
      style={{flex:1,resizeMode: 'cover'}}
      // source={{uri:'https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515_640.jpg'}}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2017/12/13/16/40/background-3017167_1280.jpg',
      }}
      >
      <TextInput
        value={name}
        onChangeText={value => setName(value)}
        style={styles.textBox}
        placeholder="Enter your name"
      />
      <TextInput
        value={age}
        onChangeText={value => setAge(value)}
        style={styles.textBox}
        placeholder="Enter your age"
      />
      <TouchableOpacity style={styles.selectItem} onPress={handlePress}>
        <DropDownPicker
          onSelectItem={value => setValue(value)}
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
        onValueChange={newValue => setGender(newValue)}
        value={gender}>
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
      <View >
        <CheckBox2 />
      </View>
      <ScrollView>
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
        
      </ScrollView>
    </ImageBackground>
    <ShowImage />
     </View>
     </ScrollView>
  );
};

export default Signup;
{
  /* <View>
        <ShowImage />
      </View> */
}

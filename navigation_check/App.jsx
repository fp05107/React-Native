import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Home from './src/screens/Home'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>
        <Home/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
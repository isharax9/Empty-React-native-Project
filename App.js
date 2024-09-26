import { StyleSheet, View } from 'react-native';
import React from 'react';
import {Component1} from './components/Component1'; // Import Component1

export default function App() {
  return (
    <View style={stylesheet.view1}>
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />
    </View>
  );
}

const stylesheet = StyleSheet.create({
  view1: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10, // Add rowGap to the View component
  },
});
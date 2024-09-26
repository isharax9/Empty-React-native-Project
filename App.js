import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [getName, setName] = useState("none");

  return (
    <View style={stylesheet.view1}>
      <Text style={stylesheet.text1}>{getName}</Text>
      <Button
        title="Press Me"
        onPress={() => {
          setName("Ishara");
          console.log("Name changed to: " + getName);
          Alert.alert("Hello "+ getName, "How are you?");
        }}
      />
    </View>
  );
}

const stylesheet = StyleSheet.create({
  text1: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },

  view1: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
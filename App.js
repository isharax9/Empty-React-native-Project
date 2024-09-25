import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default App = () => {
  return (
    <View>
      <Text style = {stylesheet.text1}>Hello World</Text>
    </View>
  );
};

/**
 * Defines the styles for the main container view of the app.
 * The container has a flex layout, a white background color, and centers its child elements both horizontally and vertically.
 */
const stylesheet = StyleSheet.create({
  text1: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },

});

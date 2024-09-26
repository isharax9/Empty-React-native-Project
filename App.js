import { StyleSheet, View } from "react-native";

import { Component1 } from "./components/Component1";

export default function App() {
  return (
    <View style={stylesheet.view1}>
      <Component1 fname={"Sahan"} lname={"Perera"} />
      <Component1 fname={"Gayan"} lname={"Danushka"} />
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
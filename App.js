import { StyleSheet, View, Text, Button } from "react-native";
import { Component1 } from "./components/Component1";

export default function App() {
  return (
    <View style={stylesheet.view1}>

      <Component1 />
      <Component1 />
      <Component1 />
      <Component1 />

    </View>
  );
}

const stylesheet = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    rowGap: 10,
  },
});

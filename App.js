import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={stylesheet.text1}>Hello!</Text>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  text1: {
    color: "red"
  }
});
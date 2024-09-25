import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={stylesheet.view1}>
      <Text style={stylesheet.text1}>Hello!</Text>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  text1: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
  },
  view1: {
    flex: 1,
    backgroundColor: "yellow",
  },
});

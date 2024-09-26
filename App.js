import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={stylesheet.view1}>
      <Text style={stylesheet.text1}>Hello World</Text>
      <Button
        title="Press Me"
        onPress={() => {
          console.log("Hello World");
          Alert.alert("Alert Title","Hello Ishara , How are you?");
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
    alignItems: "center",
    justifyContent: "center",
  }
});

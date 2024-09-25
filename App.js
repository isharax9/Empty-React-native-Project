import { StyleSheet, View, Text } from "react-native";

/**
 * Renders the main view of the App component, which displays the text "Hello!" centered on a white background.
 */
export default function App() {
  return (
    <View style={stylesheet.view1}>
      <Text style={stylesheet.text1}>Hello!</Text>
    </View>
  );
}

const stylesheet = StyleSheet.create(
  {
    /**
     * Styles the text displayed in the main view of the App component, setting the color to blue, the font size to 30, and the font weight to bold.
     */
    text1: {
      color: "blue",
      fontSize: 30,
      fontWeight: "bold",
    },
    
    /**
     * Styles the main view of the App component, centering its contents and setting a white background.
     */
    view1: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }
  }
);
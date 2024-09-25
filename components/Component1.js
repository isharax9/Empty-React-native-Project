import { StyleSheet, View, Text, Button } from "react-native";

export function Component1() {
    return (
        <View>
            <Text style={stylesheet.text1}>Text 1</Text>
            <Button title="Button 1" />
        </View>
    );
}

const stylesheet = StyleSheet.create({
    text1: {
        fontSize: 16,
        color: "red",
    },
});
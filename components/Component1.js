import { useEffect, useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export function Component1(props) {
    const [getName, setName] = useState(props.fname + " " + props.lname);


    return (
        <View style={stylesheet.container}>
            <Text style={props.display ? stylesheet.text1 : stylesheet.text2}>{getName}</Text>
            <Button title="Change" onPress={() => { setName("Ishara lakshitha"); }} />
        </View>
    );
}

const stylesheet = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 10, // Add columnGap to the View component   
    },
    text1: {
        marginRight: 0, // Add margin to the right of the Text component
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: 'green',
    },
    text2: {
        marginRight: 0, // Add margin to the right of the Text component
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: 'red',
    },
});

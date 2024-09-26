import { useState } from "react";

import { Button, StyleSheet, View, Text } from "react-native";

export function Component1(props) {
    const [getName, setName] = useState(props.fname + " " + props.lname);

    return (
        <View style={StyleSheet.view1}>
            <Text style={StyleSheet.text1}>{getName}</Text>
            <Button title="Change" onPress={() => { setName("Ishara lakshitha"); }} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 10, // Add columnGap to the View component   
    },
    text: {
        marginRight: 0, // Add margin to the right of the Text component
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
});

// components/Component1.js
import React from 'react';
import { useState } from 'react';   
import { View, Text, Button, StyleSheet } from 'react-native';

export function Component1({ fname, lname }) {
    const [getName, setName] = useState({ fname, lname });

    const handlePress = () => {
        setName({ fname: 'Ishara', lname: 'Lakshitha' });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`${getName.fname} ${getName.lname}`}</Text>
            <Button title="Change" onPress={handlePress} />
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

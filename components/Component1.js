// components/Component1.js
import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export const Component1 = () => {
    const [name, setName] = React.useState('Name');

    const handlePress = () => {
        setName('Ishara');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Button title="Change" onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 10, // Add columnGap to the View component   
        
    },
    text: {
        marginRight: 0, // Add margin to the right of the Text component
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
});

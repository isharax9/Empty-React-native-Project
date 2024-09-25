import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Text with red dashed border */}
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello!</Text>
      </View>

      {/* Large rectangle */}
      <View style={styles.largeRectangle}></View>

      {/* Three colored boxes in a row */}
      <View style={styles.row}>
        <View style={[styles.smallBox, { backgroundColor: 'lightyellow' }]}></View>
        <View style={[styles.smallBox, { backgroundColor: 'purple' }]}></View>
        <View style={[styles.smallBox, { backgroundColor: 'lightblue' }]}></View>
      </View>

      {/* Another large rectangle */}
      <View style={styles.largeRectangleGreen}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Centers all items horizontally
    backgroundColor: '#f0f0f0',
    justifyContent:'center', // Background color for the entire screen
    paddingHorizontal: 20,
  },
  helloContainer: {
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'dashed',
    padding: 10,
    marginVertical: 20,
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  largeRectangle: {
    width: '100%',
    height: 100,
    backgroundColor: 'lightcoral',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  smallBox: {
    width: 90,
    height: 80,
    columnGap: 10,
  },
  largeRectangleGreen: {
    width: '100%',
    height: 100,
    backgroundColor: 'lightgreen',
    marginVertical: 10,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.result}>32</Text>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end', // all child components aligned to the center, vertically
  },
  result: 
  {    
    color: "white", 
    fontSize: 50,
    textAlign: "right", // Align horizontally, 
  }

});

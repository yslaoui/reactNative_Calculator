import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const screenWidth = Dimensions.get('window').width;


export default function App() {

  const [answerValue, setAnswerValue] = useState(0);
  const buttonPressed = (value) => alert(`Hi ${value}`);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.result}>{answerValue}</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed(('C'))} style={[styles.button, styles.toprow]}>
            <Text style={styles.toprowtext}> C </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('+/-'))} style={[styles.button, styles.toprow]}>
            <Text style={styles.toprowtext}> +/- </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('%'))} style={[styles.button, styles.toprow]}>
            <Text style={styles.toprowtext}> % </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('/'))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> / </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed(('7'))} style={styles.button}>
            <Text style={styles.action}> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('8'))} style={styles.button}>
            <Text style={styles.action}> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('9'))} style={styles.button}>
            <Text style={styles.action}> 9 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('x'))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> x </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed(('4'))} style={styles.button}>
            <Text style={styles.action}> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('5'))} style={styles.button}>
            <Text style={styles.action}> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('6'))} style={styles.button}>
            <Text style={styles.action}> 6 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('-'))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> - </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed(('1'))} style={styles.button}>
            <Text style={styles.action}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('2'))} style={styles.button}>
            <Text style={styles.action}> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('3'))} style={styles.button}>
            <Text style={styles.action}> 3 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('+'))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> + </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed(('0'))} style={[styles.button, {width: screenWidth/2.25}]}>
            <Text style={styles.action}> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('.'))} style={styles.button}>
            <Text style={styles.action}> . </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('='))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> = </Text>
          </TouchableOpacity>
        </View>


      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end'
  },
  result: 
  {    
    color: 'white', 
    fontSize: 50,
    textAlign: 'right', // Align horizontally, 
  },
  row: 
  {
    flexDirection: 'row', 
    marginBottom: '3%'
  }, 
  button:
  {
    backgroundColor: '#595959', 
    width: screenWidth/5, 
    height: screenWidth/5, 
    marginLeft: "5%",
    marginright: "5%",
    margintop: "10%",
    marginbottom: "10%",
    borderRadius: screenWidth/10, // should be half the width and height for the button to appear circullar
    justifyContent: 'center'
  }, 
  action: 
  {
    color: 'white', 
    fontSize: screenWidth/15, 
    textAlign: 'center', 
  },
  toprow:  
  {
    backgroundColor: '#a6a6a6'
  },
  toprowtext: 
  {
    color: 'black', 
    fontSize: screenWidth/15, 
    textAlign: 'center', 
  },
  siderow:  
  {
    backgroundColor: '#3399ff'
  }
});

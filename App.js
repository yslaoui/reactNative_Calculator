import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const screenWidth = Dimensions.get('window').width;


export default function App() {

  const [answerValue, setAnswerValue] = useState(0);
  const [readyToPlace, setreadyToPlace] = useState(true);

  const [memoryValue, setmemoryValue] = useState(0);
  const [operatorValue, setoperatorValue] = useState(0);


  const calculateEquals = () => 
  {
        let previous = parseFloat(memoryValue);
        let current = parseFloat(answerValue);
        console.log(`previous is ${previous}`);
        console.log(`current is ${current}`);
        switch(operatorValue) 
        {
          case '/' : 
            setAnswerValue(previous / current);
            break;
          case 'x' : 
            setAnswerValue(previous * current);
            break;
          case '-' : 
            setAnswerValue(previous - current);
            break;
          case '+' : 
            setAnswerValue(previous + current);
            break;
          default: return;
        }  
        console.log(`inside calculateEquals answeValue is ${answerValue}`)      
  }
  
  const handleNumber = (value) => 
  {
    if (readyToPlace) 
    {
      return value;
    }
    else 
    {
      return String(answerValue) + String(value);
    }
    
  };

  const buttonPressed = (value) => 
  {
    console.log(`********`);    
    if (typeof value == 'number') 
    {
      setAnswerValue(handleNumber(value));
      setreadyToPlace(false);

    }
    if (value == 'C') 
    {
      setAnswerValue(0);
      setmemoryValue(0);
      setoperatorValue(0);
      setreadyToPlace(true);      
    }
    if (value == '/' || value == 'x' || value == '-' || value == '+') // button value is an operator /, x, -, + 
    {
      setmemoryValue(answerValue);  // keeps the result value in memory. it will be erased since we set ready to relace to true in the netx line
      setreadyToPlace(true);
      setoperatorValue(value); // store the operator: /, x, -, +, =, .
    }
    if (value == '=') 
    {
      console.log(` = was pressed`);
      calculateEquals();
      setmemoryValue(0);
      setreadyToPlace(true); 
    }

    console.log(` value is ${value}`)
    console.log(`readyToPlace is ${readyToPlace}`);
    console.log(`answerValue is ${answerValue}`);
    console.log(`memoryValue is ${memoryValue}`);
    console.log(`operatorValue is ${operatorValue}`);


  };



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
          <TouchableOpacity onPress={()=>buttonPressed((7))} style={styles.button}>
            <Text style={styles.action}> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed((8))} style={styles.button}>
            <Text style={styles.action}> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed((9))} style={styles.button}>
            <Text style={styles.action}> 9 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('x'))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> x </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed((4))} style={styles.button}>
            <Text style={styles.action}> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed((5))} style={styles.button}>
            <Text style={styles.action}> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed((6))} style={styles.button}>
            <Text style={styles.action}> 6 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('-'))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> - </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed((1))} style={styles.button}>
            <Text style={styles.action}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed((2))} style={styles.button}>
            <Text style={styles.action}> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed((3))} style={styles.button}>
            <Text style={styles.action}> 3 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed(('+'))} style={[styles.button, styles.siderow]}>
            <Text style={styles.action}> + </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={()=>buttonPressed((0))} style={[styles.button, {width: screenWidth/2.25}]}>
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
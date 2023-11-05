import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
const screenWidth = Dimensions.get('window').width;

const ResultComponent =  (props) => 
{ 
  const {answerValue, operatorValue, memoryValue, operatorList, readyToPlace, buttonList, pressedEqual} = props;
  if (pressedEqual) 
  {
    return (
      <Text style={styles.result}> {answerValue} </Text>
    );
  }  

}

const CalculationComponent =  (props) => 
{ 

  const {answerValue, operatorValue, memoryValue, operatorList, readyToPlace, buttonList, pressedEqual} = props;
  // 7
  if (operatorList.length == 0 && readyToPlace == false  && pressedEqual == false)
  {
    return (
      <Text style={styles.result}>{`${answerValue}`}</Text>
    );
  }
  // 7 x
  else if (operatorList.length == 1 &&  readyToPlace == true && pressedEqual == false) 
  {
    return (
      <Text style={styles.result}>{`${answerValue} ${operatorValue}`}</Text>
    );
  }
  // 7 x 2
  else if (operatorList.length == 1  && readyToPlace == false && pressedEqual == false) 
  {
    return (
      <Text style={styles.result}>{`${memoryValue} ${operatorValue} ${answerValue}`}</Text>
    );
  }
  // 7 x 2 = 
  else if (operatorList.length == 1  && readyToPlace == true && pressedEqual == true) 
  {
    return (
      <Text style={styles.result}>{`${buttonList[0]} ${operatorValue} ${buttonList[1]} = `}</Text>
    );
  }
  // 7 x 2 + 
  else if (operatorList.length == 2  && readyToPlace == true && pressedEqual == false) 
  {
    return (
      <Text style={styles.result}>{`${buttonList[0]} ${operatorList[0]} ${buttonList[1]} ${operatorList[1]}`}</Text>
    );
  }
  // 7 x 2 + 1 
  else if (operatorList.length == 2  && readyToPlace == false && pressedEqual == false) 
  {
    return (
      <Text style={styles.result}>{`${buttonList[0]} ${operatorList[0]} ${buttonList[1]} ${operatorList[1]} ${answerValue} `}</Text>
    );
  }

  // 7 x 2 + 1 = 
  else if (operatorList.length == 2  && readyToPlace == true && pressedEqual == true) 
  {
    return (
      <Text style={styles.result}>{`${buttonList[0]} ${operatorList[0]} ${buttonList[1]} ${operatorList[1]} ${buttonList[2]} = `}</Text>
    );
  }

  else if (operatorList.length == 2 && buttonList.length == 3 && readyToPlace == false) 
  {
    return (
      <Text style={styles.result}>{`${buttonList[0]} ${operatorList[0]} ${buttonList[1]} ${operatorList[1]} ${buttonList[2]}`}</Text>
    );
  }
  
}

export default function App() {

  const [answerValue, setAnswerValue] = useState(0); // What is shown on the screen 
  const [readyToPlace, setreadyToPlace] = useState(true); // if true number replaces the old one. If false gets concatenated to the old one.
  const [memoryValue, setmemoryValue] = useState(0); // in a*b it is a, ie the first element in an operation
  const [operatorValue, setoperatorValue] = useState(0); // it is x, - ....
  const [operatorList, setOperatorList] = useState([]);
  const [buttonList, setbuttonList] = useState([]);
  const [pressedEqual, setpressedEqual] = useState(false); // if true number replaces the old one. If false gets concatenated to the old one.


  // useEffect trigerred a re-render of the page and printout of the values whenever the values listed are changed
  // using console.log without useEffect does not work because the console.log will print the value before useState is finished changing the vakue of the state variable
  // beause useState() is asynchronous
  useEffect(() => {
    console.log(`answerValue is ${answerValue}`);
    console.log(`memoryValue is ${memoryValue}`);
    console.log(`operatorValue is ${operatorValue}`);
    console.log(`readyToPlace is ${readyToPlace}`);
    console.log(`operatorList is ${operatorList}`);
    console.log(`buttonList is ${buttonList}`);
    console.log(`pressedEqual is ${pressedEqual}`);
  }, [readyToPlace, answerValue, memoryValue, operatorValue, operatorList, buttonList, pressedEqual]); // This will run when any of the listed variables change.


  const calculateEquals = () => 
  {
        let previous = parseFloat(memoryValue);
        let current =  parseFloat(answerValue);
        let result = 0;
        console.log(`previous is ${previous}`);
        console.log(`current is ${current}`);
        switch(operatorValue) 
        {
          case '/' :
            result = previous / current;
            break; // break is important oherwise the rest of the cases are executed
          case 'x' : 
            result = previous * current;
            break;
          case '-' : 
            result = previous - current;
            break;
          case '+' : 
            result = previous + current;
            break;
          default: return result;
        }  
        return result;
        // If I set the state here the old result would be returned because state is asynchronous
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
      // if (readyToPlace && (operatorList.length > 0)) setbuttonList(myArray => myArray.concat(answerValue));
      setreadyToPlace(false);
    }

    if (value == 'AC') 
    {
      setAnswerValue(0);
      setmemoryValue(0);
      setoperatorValue(0);
      setreadyToPlace(true);  
      setOperatorList([]);
      setbuttonList([]);
      setpressedEqual(false);          
    }

    if (value == 'C') 
    {
      let answerValueString = String(answerValue);
      if (answerValueString.length == 1) 
      {
        setAnswerValue(0);
        setreadyToPlace(true);
      } 
      if (answerValueString.length > 1) 
      {
        answerValueString = answerValueString.slice(0,-1);
        console.log(`answerValuestring is ${answerValueString}`);
        setAnswerValue(parseFloat(answerValueString));
      }
    }

    if (value == '/' || value == 'x' || value == '-' || value == '+') // button value is an operator /, x, -, + 
    {
      setbuttonList(myArray => myArray.concat(answerValue));
      setreadyToPlace(true);
      setOperatorList(myArray => myArray.concat(value));
      if (operatorValue == 0) 
      {
        setmemoryValue(answerValue);  // keeps the result value in memory. it will be erased since we set ready to relace to true in the netx line
        setoperatorValue(value);
      }
      else 
      {
        let interMediaryValue =  calculateEquals();
        setmemoryValue(interMediaryValue);
        setoperatorValue(value);
        console.log(`The intermediate value is  ${interMediaryValue}`);
      }
      

    }
    if (value == '=') 
    {
      setbuttonList(myArray => myArray.concat(answerValue));
      console.log(` = was pressed`);
      let result = calculateEquals();
      setAnswerValue(result);
      setmemoryValue(0);
      setreadyToPlace(true); 
      setpressedEqual(true);
    }

    if (value == '+/-') 
    {
      setAnswerValue(-answerValue);
    }
    
    if (value == '%') 
    {
      setAnswerValue(answerValue * 0.01);
    }
    
  };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <ResultComponent memoryValue={memoryValue} operatorValue={operatorValue} answerValue={answerValue} operatorList={operatorList} buttonList = {buttonList} readyToPlace={readyToPlace} pressedEqual={pressedEqual} />
        <CalculationComponent memoryValue={memoryValue} operatorValue={operatorValue} answerValue={answerValue} operatorList={operatorList} buttonList = {buttonList} readyToPlace={readyToPlace} pressedEqual={pressedEqual}/>

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
        <TouchableOpacity onPress={()=>buttonPressed(('AC'))} style={[styles.button, styles.toprow]}>
            <Text style={styles.toprowtext}> AC </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>buttonPressed((0))} style={styles.button}>
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
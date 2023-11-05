import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';


const CalculationComponent =  (props) => 
{ 

  const {answerValue, operatorValue, memoryValue, operatorList, readyToPlace, buttonList, pressedEqual, styles} = props;
  // 7
  if (operatorList.length == 0 && readyToPlace == false  && pressedEqual == false)
  {
    return (
      <Text style={styles.calculation}>{`${answerValue}`}</Text>
    );
  }
  // 7 x
  else if (operatorList.length == 1 &&  readyToPlace == true && pressedEqual == false) 
  {
    return (
      <Text style={styles.calculation}>{`${answerValue} ${operatorValue}`}</Text>
    );
  }
  // 7 x 2
  else if (operatorList.length == 1  && readyToPlace == false && pressedEqual == false) 
  {
    return (
      <Text style={styles.calculation}>{`${memoryValue} ${operatorValue} ${answerValue}`}</Text>
    );
  }
  // 7 x 2 = 
  else if (operatorList.length == 1  && readyToPlace == true && pressedEqual == true) 
  {
    return (
      <Text style={styles.calculation}>{`${buttonList[0]} ${operatorValue} ${buttonList[1]} = `}</Text>
    );
  }
  // 7 x 2 + 
  else if (operatorList.length == 2  && readyToPlace == true && pressedEqual == false) 
  {
    return (
      <Text style={styles.calculation}>{`${buttonList[0]} ${operatorList[0]} ${buttonList[1]} ${operatorList[1]}`}</Text>
    );
  }
  // 7 x 2 + 1 
  else if (operatorList.length == 2  && readyToPlace == false && pressedEqual == false) 
  {
    return (
      <Text style={styles.calculation}>{`${buttonList[0]} ${operatorList[0]} ${buttonList[1]} ${operatorList[1]} ${answerValue} `}</Text>
    );
  }

  // 7 x 2 + 1 = 
  else if (operatorList.length == 2  && readyToPlace == true && pressedEqual == true) 
  {
    return (
      <Text style={styles.calculation}>{`${buttonList[0]} ${operatorList[0]} ${buttonList[1]} ${operatorList[1]} ${buttonList[2]} = `}</Text>
    );
  }
  
}

export default CalculationComponent;

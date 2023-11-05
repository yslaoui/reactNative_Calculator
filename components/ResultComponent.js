import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';


const ResultComponent =  (props) => 
{ 
  const {answerValue, operatorValue, memoryValue, operatorList, readyToPlace, buttonList, pressedEqual, styles} = props;
  if (pressedEqual) 
  {
    return (
      <Text style={styles.result}> {answerValue} </Text>
    );
  }  

}

export default ResultComponent;

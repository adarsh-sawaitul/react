import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import Color from '../constants/color';
import NumberContainer from '../components/NumberContainer';
import Input from '../components/Input';


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, '')); // valiadation of the user  input or
    //user cant enter any thing , expect numbers
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'numer has to be entered between  1 to 99 .',
        [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
      );
      //return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  // let confirmedOutput;

  // if (confirmed){
  //   confirmedOutput = <Text> Chosen number: {selectedNumber} </Text>
  // }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text> You selected </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title=" START GAME" onPress={() => props.onStartGame(selectedNumber)} /> 
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // if user touches anywhere on  the screen the keyboard dissapearss
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text> Select a Number </Text>

          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={resetInputHandler}
                title="Reset"
                color={Color.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={confirmInputHandler}
                title="Confirm"
                color={Color.accent}
              />
            </View>
          </View>
        </Card>
  
        {confirmedOutput}

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 40,
    alignItems: 'center'
  },
});

export default StartGameScreen;

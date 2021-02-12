import React from 'rect';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
// here computer needs to make a guess , about the number
// initially when the screen loads first.
// and after the number guess
// user should tell whether the number is too high or too low.

// this gives a no. between max and min , and allows to exclude sme numbers
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  cosnt[(currentGuess, setCurrentGuess)] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
      <View style={styles.screen}>
          <Text> Opponents Guess</Text>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.buttonContainer}>
              <Button title="Lower" onPress ={() => {}}/>
              <Button title="Lower"  onPress ={() => {}}/>
          </Card>
      </View>
  )
};

const styles = Stylesheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alighItems: 'center'
    },
    buttonContainer:
    {
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }

    
});

export default GameScreen;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { container, deckTitle, deckSubtitle } from './../../utils/styles';
import { black } from './../../utils/colors';

const Result = ({ correctAnswers, startQuiz, finishQuiz, totalQuestions }) => {
  return (
    <View style={container}>
      <Text style={[styles.deckTitle, { fontSize: 30 }]}>Result</Text>

      <Text style={[styles.deckSubtitle, { fontSize: 17 }]}>
        {`You have completed ${(
          (correctAnswers * 100) /
          totalQuestions
        ).toFixed(2)}% of the questions`}
      </Text>

      <View style={{ marginTop: 80, width: 300 }}>
        <TouchableOpacity onPress={() => startQuiz()}>
          <Text style={[styles.button, { borderColor: black, color: black }]}>
            Start Quiz Again
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => finishQuiz()}>
          <Text
            style={[
              styles.button,
              { backgroundColor: black, color: '#fff', borderColor: black }
            ]}
          >
            Return to the Deck View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container,
  deckTitle,
  deckSubtitle,
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center'
  }
});

export default Result;

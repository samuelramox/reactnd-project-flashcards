import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { clearLocalNotification, setLocalNotification } from '../../utils/api';
import { container, deckTitle, deckSubtitle } from '../../utils/styles';
import { black, white } from '../../utils/colors';

class Result extends Component {
  componentDidMount() {
    clearLocalNotification();
    setLocalNotification();
  }

  render() {
    const {
      correctAnswers,
      startQuiz,
      finishQuiz,
      totalQuestions
    } = this.props;

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
              style={[styles.button, { backgroundColor: black, color: white }]}
            >
              Return to the Deck View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Result.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  startQuiz: PropTypes.func.isRequired,
  finishQuiz: PropTypes.func.isRequired,
  totalQuestions: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container,
  deckTitle,
  deckSubtitle,
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    textAlign: 'center'
  }
});

export default Result;

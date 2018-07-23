import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Result from '../Result';
import { container, deckTitle, deckSubtitle } from './../../utils/styles';
import { black, red } from './../../utils/colors';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      indexQuestion: 0,
      isAnswer: true,
      correctAnswers: 0,
      result: 0,
      isResultScreen: false
    };
  }

  switchScreen = () => {
    this.setState(prevState => ({
      isAnswer: !prevState.isAnswer
    }));
  };

  handleResult = async (result, totalQuestions) => {
    const { indexQuestion, correctAnswers } = this.state;
    if (totalQuestions === indexQuestion + 1) {
      await this.updateCorrectAnswers(result);
      this.setState({
        isResultScreen: true
      });
    } else {
      this.updateCorrectAnswers(result);
      this.setState(prevState => ({
        indexQuestion: prevState.indexQuestion + 1,
        isAnswer: true
      }));
    }
  };

  cleanState = () => {
    this.setState({
      indexQuestion: 0,
      isAnswer: true,
      correctAnswers: 0,
      result: 0,
      isResultScreen: false
    });
  };

  updateCorrectAnswers = answer => {
    this.setState(state => {
      const { correctAnswers } = state;
      const result = answer === 'correct' ? correctAnswers + 1 : correctAnswers;
      return {
        correctAnswers: result
      };
    });
  };

  resetQuiz = () => {
    this.cleanState();
  };

  finishQuiz = () => {
    const { navigation = {} } = this.props;
    const { state = {} } = navigation;
    const { params = {} } = state;
    const { deck } = params;
    const { questions } = deck;
    navigation.navigate('Deck', { deck });
  };

  render() {
    const { navigation = {} } = this.props;
    const { state = {} } = navigation;
    const { params = {} } = state;
    const { deck } = params;
    const { questions } = deck;
    const {
      indexQuestion,
      isAnswer,
      isResultScreen,
      correctAnswers
    } = this.state;
    const question = questions[indexQuestion].question;
    const answer = questions[indexQuestion].answer;
    if (isResultScreen) {
      return (
        <Result
          correctAnswers={correctAnswers}
          startQuiz={this.resetQuiz}
          finishQuiz={this.finishQuiz}
        />
      );
    }
    return (
      <View style={container}>
        <Text style={[styles.deckTitle, { fontSize: 30, textAlign: 'center' }]}>
          {isAnswer ? question : answer}
        </Text>
        <TouchableOpacity onPress={this.switchScreen}>
          <Text style={{ color: red }}>{isAnswer ? 'answer' : 'question'}</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 80, width: 300 }}>
          <TouchableOpacity
            onPress={() => this.handleResult('correct', questions.length)}
          >
            <Text
              style={[
                styles.button,
                { backgroundColor: black, color: '#fff', borderColor: black }
              ]}
            >
              Correct
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleResult('incorrect', questions.length)}
          >
            <Text style={[styles.button, { borderColor: black, color: black }]}>
              Incorrect
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container,
  deckTitle,
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

export default Quiz;

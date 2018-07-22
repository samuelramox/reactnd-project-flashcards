import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { container, deckTitle, deckSubtitle } from './../../utils/styles';
import { black } from './../../utils/colors';

const Quiz = props => {
  const { navigation = {} } = props;
  const { state = {} } = navigation;
  const { params = {} } = state;
  return (
    <View style={container}>
      <Text style={[styles.deckTitle, { fontSize: 30, textAlign: 'center' }]}>
        NAME OF THE QUESTION OF THE FIRST QUIZ
      </Text>

      <View style={{ marginTop: 80, width: 300 }}>
        <TouchableOpacity>
          <Text
            style={[
              styles.button,
              { backgroundColor: black, color: '#fff', borderColor: black }
            ]}
          >
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.button, { borderColor: black, color: black }]}>
            Incorrect
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

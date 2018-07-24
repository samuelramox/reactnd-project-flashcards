import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Introduction from '../Introduction';
import { container, deckTitle, deckSubtitle } from '../../utils/styles';
import { black, white } from '../../utils/colors';

class Deck extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: navigation.state.params.deck.title
    };
  }

  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { deck } = params;

    return (
      <View style={container}>
        <Introduction titleSize={30} subtitleSize={17} deck={deck} />

        <View style={{ marginTop: 80, width: 300 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCard', { deck })}
          >
            <Text style={[styles.button, { borderColor: black, color: black }]}>
              Add new card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              deck.questions.length === 0
                ? alert('Please add a card first')
                : navigation.navigate('Quiz', { deck })
            }
          >
            <Text
              style={[
                styles.button,
                {
                  backgroundColor: black,
                  color: white
                }
              ]}
            >
              Start a quiz
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
  deckSubtitle,
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    textAlign: 'center'
  }
});

export default Deck;

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { container, deckTitle, deckSubtitle } from './../../utils/styles';
import { black } from './../../utils/colors';

class Deck extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: navigation.state.params.deckList.name
    };
  }

  render() {
    const { navigation = {} } = this.props;
    const { state = {} } = navigation;
    const { params = {} } = state;
    const { deckList, decks } = params;
    const card = deckList;
    const { questions } = decks;
    return (
      <View style={container}>
        <Text style={[styles.deckTitle, { fontSize: 30 }]}>{card.name}</Text>
        <Text style={[styles.deckSubtitle, { fontSize: 17 }]}>
          {card.cards} {card.cards === 1 ? 'card' : 'cards'}
        </Text>
        <View style={{ marginTop: 80, width: 300 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCard', { card: decks })}
          >
            <Text style={[styles.button, { borderColor: black, color: black }]}>
              Add a card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz', { questions })}
          >
            <Text
              style={[
                styles.button,
                { backgroundColor: black, color: '#fff', borderColor: black }
              ]}
            >
              start a quiz
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

export default Deck;

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Introduction from './../../components/Introduction';
import { container, deckTitle, deckSubtitle } from './../../utils/styles';
import { black } from './../../utils/colors';

class Deck extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: navigation.state.params.deck.title
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={container}>
        <Introduction
          titleSize={30}
          subtitleSize={17}
          deck={navigation.state.params.deck}
        />

        <View style={{ marginTop: 80, width: 300 }}>
          <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
            <Text style={[styles.button, { borderColor: black, color: black }]}>
              Add a card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
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

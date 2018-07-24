import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { updateDecks, getDecks } from '../../utils/api';
import { listDecks } from '../../actions/deck';
import { container, deckTitle } from '../../utils/styles';
import { black } from '../../utils/colors';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleDeck: ''
    };
    this.submit = this.submit.bind(this);
  }

  submit = async () => {
    const { titleDeck } = this.state;
    const { dispatch, navigation } = this.props;

    const newDeckObj = {
      [titleDeck]: {
        title: titleDeck,
        questions: []
      }
    };
    await updateDecks(newDeckObj);
    getDecks()
      .then(res => dispatch(listDecks(JSON.parse(res))))
      .then(() => {
        navigation.navigate('Deck', { deck: newDeckObj[titleDeck] });
      });
  };

  render() {
    const { titleDeck } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={{ width: 300 }}>
          <Text style={[styles.deckTitle]}>
            What is the title of your new deck?
          </Text>

          <TextInput
            style={styles.input}
            value={titleDeck}
            placeholder="Title for the new deck"
            onChangeText={text => this.setState({ titleDeck: text })}
          />

          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: black,
                alignSelf: 'center'
              }
            ]}
            onPress={this.submit}
          >
            <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center' }}>
              Create Deck
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container,
  deckTitle,
  input: {
    fontSize: 20,
    height: 50,
    padding: 8,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 40,
    borderWidth: 0,
    width: 200
  }
});

export default connect()(AddDeck);

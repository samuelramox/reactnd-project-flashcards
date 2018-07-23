import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { listDecks } from './../../actions/deck';
import { getDecks, setDecks } from './../../utils/api';
import { container, deckTitle, deckSubtitle } from './../../utils/styles';
import { gray } from './../../utils/colors';
import initialData from './../../utils/initialData.json';

class Decks extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true
    };
  }
  async componentDidMount() {
    const { dispatch } = this.props;
    await setDecks(initialData);

    getDecks().then(result => {
      dispatch(listDecks(JSON.parse(result)));
      this.setState({
        isFetching: false
      });
    });
  }

  render() {
    const { navigation = {}, decks } = this.props;
    const { isFetching } = this.state;
    console.log(decks);
    if (isFetching) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <View>
        {decks.map((item, index) => (
          <TouchableOpacity
            key={item.name}
            style={styles.item}
            onPress={() =>
              navigation.navigate('Deck', {
                decks: decks[item.name],
                deckList: item
              })
            }
          >
            <Text style={[styles.deckTitle, { fontSize: 22 }]}>
              {item.name}
            </Text>
            <Text style={[styles.deckSubtitle, { fontSize: 13 }]}>
              {item.cards} {item.cards === 1 ? 'card' : 'cards'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

Decks.propTypes = {
  decks: PropTypes.array
};

Decks.defaultProps = {
  decks: false
};

const styles = StyleSheet.create({
  container,
  deckTitle,
  deckSubtitle,
  item: {
    height: 100,
    borderBottomColor: gray,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  decks: state.listDecks
});

export default connect(mapStateToProps)(Decks);

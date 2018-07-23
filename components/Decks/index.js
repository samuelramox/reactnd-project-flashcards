import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Introduction from './../../components/Introduction';
import { listDecks } from './../../actions/deck';
import { getDecks, setDecks } from './../../utils/api';
import { gray } from './../../utils/colors';
import initialData from './../../utils/initialData.json';

class Decks extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true
    };
  }

  componentDidMount() {
    const { dispatch, decks } = this.props;
    dispatch(listDecks(initialData));
    this.setState({
      isFetching: false
    });
  }

  // componentWillReceiveProps (nextProps) {
  //   const { decks } = this.props
  //   console.log('deckProps', decks)
  //   console.log('deck next Props', nextProps.decks)
  // }

  render() {
    const { navigation = {}, decks } = this.props;
    const { isFetching } = this.state;
    const decksArray = decks !== undefined ? Object.values(decks) : [];
    if (isFetching) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }
    if (decksArray.length === 0) {
      return (
        <View style={styles.container}>
          <Text>
            DeckList is empty, click on the newDeck tab for insert a new Deck
          </Text>
        </View>
      );
    }
    return (
      <View>
        {decksArray.map(deck => (
          <TouchableOpacity
            key={deck.title}
            style={styles.item}
            onPress={() => navigation.navigate('Deck', { deck })}
          >
            <Introduction titleSize={22} subtitleSize={13} deck={deck} />
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
  item: {
    height: 100,
    borderBottomColor: gray,
    borderBottomWidth: 1,
    justifyContent: 'center'
  }
});

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(Decks);

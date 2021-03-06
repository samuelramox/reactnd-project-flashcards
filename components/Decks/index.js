import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Introduction from '../Introduction';
import { listDecks } from '../../actions/deck';
import { getDecks, setDecks } from '../../utils/api';
import { gray } from '../../utils/colors';
import initialData from '../../utils/initialData.json';

class Decks extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true
    };
  }

  componentDidMount() {
    this.updateComponent(initialData);
  }

  componentWillReceiveProps(nextProps) {
    const { decks } = this.props;

    if (decks !== undefined) {
      const decksArr = Object.values(decks);
      if (
        decksArr.some(item => {
          if (
            item &&
            item.questions &&
            nextProps.decks &&
            nextProps.decks[item.title]
          ) {
            return (
              item.questions.length >
              nextProps.decks[item.title].questions.length
            );
          }
          return false;
        })
      ) {
        this.updateComponent(decks);
      }
    }
  }

  async updateComponent(data) {
    const { dispatch } = this.props;
    await setDecks(data);
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
            DeckList is empty, click on the AddDeck tab for insert a new Deck
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

const styles = StyleSheet.create({
  item: {
    height: 100,
    borderBottomColor: gray,
    borderBottomWidth: 1,
    marginRight: 8,
    marginLeft: 8,
    justifyContent: 'center'
  }
});

const mapStateToProps = state => ({
  decks: state.decks
});

export default connect(mapStateToProps)(Decks);

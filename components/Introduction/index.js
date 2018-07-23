import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { deckTitle, deckSubtitle } from '../../utils/styles';

const Introduction = props => {
  const { titleSize, subtitleSize, deck } = props;
  const cards = deck.questions.length;

  return (
    <View style={styles.container}>
      <Text style={[styles.deckTitle, { fontSize: titleSize }]}>
        {deck.title}
      </Text>
      <Text style={[styles.deckSubtitle, { fontSize: subtitleSize }]}>
        {cards} {cards === 1 ? 'card' : 'cards'}
      </Text>
    </View>
  );
};

Introduction.propTypes = {
  titleSize: PropTypes.number.isRequired,
  subtitleSize: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  deckTitle,
  deckSubtitle,
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Introduction;

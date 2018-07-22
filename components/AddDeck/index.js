import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AddDeck = () => (
  <View style={styles.container}>
    <Text>Add Deck</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AddDeck;

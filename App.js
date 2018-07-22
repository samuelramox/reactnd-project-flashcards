import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import StatusBar from './components/StatusBar/';

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
});

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0D8ABC" barStyle="light-content" />
      <Tabs />
    </View>
  );
}

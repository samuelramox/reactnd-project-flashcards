import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import Deck from './components/Deck';
import Decks from './components/Decks';
import Quiz from './components/Quiz';
import StatusBar from './components/StatusBar';
import { setLocalNotification } from './utils/api';

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks
    },
    AddDeck: {
      screen: AddDeck
    }
  },
  {
    navigationOptions: {
      header: null
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff'
    }
  }
);

const DecksNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
});

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#0D8ABC" barStyle="light-content" />
          <DecksNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;

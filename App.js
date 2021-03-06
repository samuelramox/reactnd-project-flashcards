import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AddCard from './components/AddCard';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import FlashCardsStatusBar from './components/FlashCardsStatusBar';
import Tabs from './components/Tabs';
import { setLocalNotification } from './utils/api';
import { black } from './utils/colors';

const DecksNavigator = createStackNavigator({
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
          <FlashCardsStatusBar
            backgroundColor={black}
            barStyle="light-content"
          />
          <DecksNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;

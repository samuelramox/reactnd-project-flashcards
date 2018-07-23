import { createBottomTabNavigator } from 'react-navigation';
import AddDeck from '../AddDeck';
import Decks from '../Decks';

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks
    },
    AddDeck: {
      screen: AddDeck
    }
  },

  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },
      style: {
        height: 50,
        paddingBottom: 15
      }
    }
  }
);

export default Tabs;

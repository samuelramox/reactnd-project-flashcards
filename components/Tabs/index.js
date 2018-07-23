import { TabNavigator } from 'react-navigation';
import AddDeck from '../AddDeck';
import Decks from '../Decks';
import { yellow } from '../../utils/colors';

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
      activeTintColor: yellow
    }
  }
);

export default Tabs;

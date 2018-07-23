import { LIST_DECKS, NEW_DECK, ADD_CARD } from '../utils/actionTypes';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LIST_DECKS:
      return {
        decks: action.decks,
        listDecks: Object.keys(action.decks).map(item => ({
          name: item,
          cards: action.decks[item].questions.length
        }))
      };
    case NEW_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          ...action.item
        }
      };
    case ADD_CARD:
      return {
        ...state,
        decks: {
          ...state.decks,
          ...action.name
        }
      };
    default:
      return state;
  }
}

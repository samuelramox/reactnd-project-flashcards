import { LIST_DECKS, NEW_DECK, ADD_CARD } from '../utils/actionTypes';

export function listDecks(decks) {
  return {
    type: LIST_DECKS,
    decks
  };
}

export function newDeck(item) {
  return {
    type: NEW_DECK,
    item
  };
}

export function createNewCard(name) {
  return {
    type: ADD_CARD,
    name
  };
}

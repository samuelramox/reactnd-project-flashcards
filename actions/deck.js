export const LIST_DECKS = 'LIST_DECKS';
export const NEW_DECK = 'NEW_DECK';
export const ADD_CARD = 'ADD_CARD';

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

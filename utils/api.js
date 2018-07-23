import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'appDeck:Udacity';

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY);
}

export function updateDecks(deck) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      decks: deck
    })
  );
}

export function setDecks(decks) {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
}

export function submitDeck({ deck, key }) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [key]: deck
    })
  );
}

export function removeDeck(key) {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}

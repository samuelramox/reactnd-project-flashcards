import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'appDeck:Udacity';

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

import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

export const STORAGE_KEY = 'appDeck:Udacity';
export const NOTIFICATION_KEY = 'appDeck:Notifications';

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY);
}

export function updateDecks(deck) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      ...deck
    })
  );
}

export function setDecks(decks) {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: 'Log your stats!',
    body: "👋 don't forget to study today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.getExpoPushTokenAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day'
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

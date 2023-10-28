import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(notificationItem.default, [notification])

export const getAllNotificationsByUser = (userId) => {

  const entityNotification = normalizedData.entities.notifications;
  const data = [];

  for (let x in entityNotification) {
    if (entityNotification[x].author === userId) {
      const contextMessage = entityNotification[x].context;
      data.push(normalizedData.entities.messages[contextMessage])
    }
  }
  return data;
};

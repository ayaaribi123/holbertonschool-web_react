import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';

// Define a users schema
const user = new schema.Entity('users');

// Define a message schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define a notification schema
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

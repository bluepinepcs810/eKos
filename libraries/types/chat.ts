import { ID } from './common';

export type MessageItemModel = {
  id: ID;
  text: string;
  createdAt: string;
  senderId: string;
  roomId: ID;
};

export enum CHAT_EVENTS {
  NEW_MESSAGE = 'NEW_MESSAGE',
}

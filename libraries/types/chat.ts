import { ID } from './common';

export type MessageItemType = {
  id: ID;
  text: string;
  createdAt: string;
  senderId: string;
  receiverId: string;
};

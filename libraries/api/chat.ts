import Api from '.';
import { RoomListItemModel, RoomModel } from '../models/chat';
import { MessageItemModel } from '../types/chat';
import { ID, Pager } from '../types/common';

const createRoom = async (userId: ID): Promise<{ roomId: ID }> => {
  return Api.post('chat/get-room', {
    talkToUserId: userId,
  });
};
const getRoom = async (roomId: ID): Promise<RoomModel> => {
  if (!roomId) return { id: -1, users: [] };
  return Api.get(`chat/room/${roomId}`);
};

const getUnreadRooms = async (pager: Pager): Promise<RoomListItemModel[]> => {
  return Api.get('chat/unread-room', pager);
};

const getReadRooms = async (pager: Pager): Promise<RoomListItemModel[]> => {
  return Api.get('chat/read-room', pager);
};

const getMessages = async (
  roomId: ID,
  pager: Pager
): Promise<MessageItemModel[]> => {
  return Api.get(`chat/room/${roomId}/messages`, pager);
};

const createMessage = async (roomId: ID, text: string) => {
  return Api.post(`chat/new`, { roomId: roomId.toString(), text });
};

const setRead = async (roomId: ID) => {
  return Api.put(`chat/set-read`, { roomId });
};
export const ChatApi = {
  createRoom,
  getMessages,
  getRoom,
  getUnreadRooms,
  getReadRooms,
  createMessage,
  setRead,
};

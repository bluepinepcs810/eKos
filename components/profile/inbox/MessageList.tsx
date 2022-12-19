import { MessageItemType } from '../../../libraries/types/chat';
import MessageItem from './MessageItem';

const messages: MessageItemType[] = [
  {
    id: 1,
    text: 'Hi, Nice to meet you',
    createdAt: '2022-12-16T10:00:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 2,
    text: 'Good afternoon, yes I see you are our regular customer, we do you 10% discount on your purchases and send you a gift toy for your child. Also answer for this item, it is brand new and we are reshipping it as it is an item.',
    createdAt: '2022-12-16T10:01:00',
    senderId: 'you',
    receiverId: 'me',
  },
  {
    id: 3,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 4,
    text: 'Great.',
    createdAt: '2022-12-16T10:04:00',
    senderId: 'you',
    receiverId: 'me',
  },
  {
    id: 5,
    text: 'Thank you',
    createdAt: '2022-12-16T10:05:00',
    senderId: 'you',
    receiverId: 'me',
  },
  {
    id: 6,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
  {
    id: 7,
    text: "How's it going?",
    createdAt: '2022-12-16T10:03:00',
    senderId: 'me',
    receiverId: 'you',
  },
];
const MessageList = () => {
  return (
    <div className="flex flex-col-reverse overflow-y-scroll gap-y-2 p-2.5">
      {messages.map((message) => (
        <MessageItem data={message} key={message.id} />
      ))}
    </div>
  );
};
export default MessageList;

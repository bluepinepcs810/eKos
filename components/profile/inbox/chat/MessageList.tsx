import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ClipLoader } from 'react-spinners';
import { io } from 'socket.io-client';
import { ChatApi } from '../../../../libraries/api/chat';
import { CHAT_EVENTS, MessageItemModel } from '../../../../libraries/types/chat';
import LocalStorage from '../../../../libraries/utils/helpers/local-storage';
import { showError } from '../../../../libraries/utils/toast';
import MessageItem from './MessageItem';
import { useRoom } from './RoomContext';
import { orderBy } from 'lodash';

const MESSAGE_SIZE = 10;

const MessageList = () => {
  const { room } = useRoom();

  const [hasMore, setHasMore] = useState<boolean>(true);
  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<MessageItemModel[]>([]);
  const [page, setPage] = useState(1);

  const handleLoad = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const msgs = await ChatApi.getMessages(room.id, {page, size: MESSAGE_SIZE});
      msgs.forEach(item => {
        if (messages.find(message => message.id === item.id)) return;
        messages.push(item);
      });
      setMessages(orderBy(messages,'id', 'desc'));
      setHasMore(msgs.length > 0);
      setPage(page + 1);
    } catch(e: any) {
      showError(e);
    }
    setLoading(false);
  }, [loading, messages, page, room.id]);

  useEffect(() => {
    if (initial) {
      setInitial(false);
      handleLoad();
    }
  }, [handleLoad, initial]);

  useEffect(() => {
    const token = LocalStorage.getToken();
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, { auth: { token }});
    socket.on(CHAT_EVENTS.NEW_MESSAGE + '_' + room.id, (data) => {
      const newMessage = data.msg as MessageItemModel;
      setMessages(messages => {
        const existing = messages.find(item => item.id === newMessage.id);
        if (existing) return messages;
        messages.push(newMessage);
        return orderBy(messages, ['id'], ['desc']);
      })
    });
    return () => {
      socket.off(CHAT_EVENTS.NEW_MESSAGE + '_' + room.id);
      socket.close();
    }
  }, [])

  return (
    <div className="p-2.5 h-full flex flex-col-reverse overflow-auto"
      id="message-list"
    >
      <InfiniteScroll
        dataLength={messages.length}
        next={handleLoad}
        style={{
          overflow: 'unset',
        }}
        className="flex gap-y-2 flex-col-reverse"
        inverse={true}
        hasMore={initial || hasMore}
        loader={
          <div className='flex justify-center p-5'>
            <ClipLoader size={30} color="#D2B6F7" />
          </div>
        }
        scrollableTarget="message-list"
      >
        {
          messages.map(item =>
              <MessageItem data={item} key={item.id} />
            )
        }
      </InfiniteScroll>
    </div>
  );
};
export default MessageList;

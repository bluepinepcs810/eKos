import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ChatBox from '../../../../components/profile/inbox/chat/ChatBox';
import { RoomContextProvider } from '../../../../components/profile/inbox/chat/RoomContext';
import ProfileLeftPane from '../../../../components/profile/ProfileLeftPane';
import { ChatApi } from '../../../../libraries/api/chat';
import { ProfilePane } from '../../../../libraries/types/pages/profile';

const ChatPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    ChatApi.setRead(id as string);
  }, [id]);

  return (
    <div className="inbox-page bg-main-light min-h-[418px] flex justify-center h-full">
      <div className="content-container flex justify-start">
        <ProfileLeftPane activePane={ProfilePane.INBOX} />
        <div className="right-pane flex-grow" style={{ height: '700px' }}>
          <RoomContextProvider roomId={id as string}>
            <ChatBox />
          </RoomContextProvider>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;

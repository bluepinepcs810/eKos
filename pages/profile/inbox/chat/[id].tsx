import ChatBox from '../../../../components/profile/inbox/ChatBox';
import ProfileLeftPane from '../../../../components/profile/ProfileLeftPane';
import { ProfilePane } from '../../../../libraries/types/pages/profile';

const ChatPage = () => {
  return (
    <div className="inbox-page bg-main-light min-h-[418px] flex justify-center h-full">
      <div className="content-container flex justify-start">
        <ProfileLeftPane activePane={ProfilePane.INBOX} />
        <div className="right-pane flex-grow" style={{ height: '700px' }}>
          <ChatBox />
        </div>
      </div>
    </div>
  );
};
export default ChatPage;

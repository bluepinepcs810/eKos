import InboxPane from "../../../components/profile/inbox/InboxPane";
import ProfileLeftPane from "../../../components/profile/ProfileLeftPane";
import UserTap from "../../../components/snippet/UserTap";
import { ProfilePane } from "../../../libraries/types/pages/profile";

const Inbox = () => {
  return (
    <div className="inbox-page bg-main-light min-h-[418px] flex justify-center h-full">
      <div className="content-container flex justify-start">
        <ProfileLeftPane activePane={ProfilePane.INBOX} />
        <div className="right-pane flex-grow">
          <InboxPane />
        </div>
      </div>
    </div>
  )
}
export default Inbox;

import ProfileLeftPane from "../../../components/profile/ProfileLeftPane";
import WalletPane from "../../../components/profile/wallet/WalletPane";
import { ProfilePane } from "../../../libraries/types/pages/profile";

const WalletPage = () => {
  return (
    <div className="inbox-page bg-main-light min-h-[418px] flex justify-center h-full">
      <div className="content-container flex justify-start">
        <ProfileLeftPane activePane={ProfilePane.PURCHASE} />
        <div className="right-pane flex-grow">
          <WalletPane />
        </div>
      </div>
    </div>
  );
};

export default WalletPage;

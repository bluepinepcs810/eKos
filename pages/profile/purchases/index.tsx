import ProfileLeftPane from '../../../components/profile/ProfileLeftPane';
import PurchasesPane from '../../../components/profile/purchases';
import { ProfilePane } from '../../../libraries/types/pages/profile';

const Purchases = () => {
  return (
    <div className="inbox-page bg-main-light min-h-[418px] flex justify-center h-full">
      <div className="content-container flex justify-start">
        <ProfileLeftPane activePane={ProfilePane.PURCHASE} />
        <div className="right-pane flex-grow">
          <PurchasesPane />
        </div>
      </div>
    </div>
  );
};
export default Purchases;

import FavoritePane from '../../../components/profile/favorites';
import ProfileLeftPane from '../../../components/profile/ProfileLeftPane';
import { ProfilePane } from '../../../libraries/types/pages/profile';

const Favorite = () => {
  return (
    <div className="inbox-page bg-main-light min-h-[418px] flex justify-center h-full">
      <div className="content-container flex justify-start">
        <ProfileLeftPane activePane={ProfilePane.FAVORITES} />
        <div className="right-pane flex-grow">
          <FavoritePane />
        </div>
      </div>
    </div>
  );
};
export default Favorite;

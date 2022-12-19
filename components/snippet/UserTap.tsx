import { UserType } from '../../libraries/models/user';
import { truncateString } from '../../libraries/utils/helpers/string';
import Avatar from './Avatar';
import StarRating from './StarRating';

type UserTapProps = {
  data: UserType;
};

const UserTap: React.FC<UserTapProps> = ({ data }) => {
  return (
    <div className="flex gap-x-3">
      <Avatar
        src={data.avatar || '/assets/profile-img-default.svg'}
        alt={data.userName || 'unknown user'}
      />
      <div className="flex flex-col justify-center gap-y-0.5">
        <div className="user-name text-main-dark font-semibold">
          {truncateString(data.userName, 10)}
        </div>
        <div className="user-rating">
          <StarRating rate={data.rating ? data.rating : 0} size={14} />
        </div>
      </div>
    </div>
  );
};

export default UserTap;

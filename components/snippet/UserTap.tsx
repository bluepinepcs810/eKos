import { UserType } from '../../libraries/models/user';
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
        alt={data.name || 'unknown user'}
      />
      <div className="flex flex-col justify-center gap-y-0.5">
        <div className="user-name text-main-dark font-semibold">
          {data.name}
        </div>
        <div className="user-rating">
          <StarRating rate={data.rate ? data.rate : 0} size={14} />
        </div>
      </div>
    </div>
  );
};

export default UserTap;

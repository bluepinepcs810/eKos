import Image from 'next/image';
import Link from 'next/link';
import { useGetReadRooms } from '../../../hooks/api.hooks';
import { convertMessageTime } from '../../../libraries/utils/helpers/date';
import { truncateString } from '../../../libraries/utils/helpers/string';
import InboxItem from './chat/InboxItem';

const ReadsBox = () => {
  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    refetch,
    isError,
    error,
  } = useGetReadRooms();

  return (
    <>
      <div className="uppercase main-shadow p-2.5 rounded-lg text-main-dark font-semibold mb-2">
        Read
      </div>
      {data?.pages.map((page) =>
        page.map((room) => (
          <Link
            className="main-shadow main-shadow-hover p-1.5 rounded-lg text-main-dark font-semibold mb-2 flex justify-between"
            href={'/profile/inbox/chat/' + room.id}
            key={room.id}
          >
            <div className="flex gap-x-1">
              <div className="relative w-[55px] h-[55px] flex-initial">
                <Image
                  src={room.user?.avatar ?? '/avatar-sample.png'}
                  alt="avatar"
                  fill
                  className=" object-cover rounded-full"
                />
                <div className="absolute bg-green-400 w-2 h-2 border border-white rounded-full right-1 bottom-0.5"></div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-[12px] text-main-weighted">
                  {truncateString(room.user?.userName, 15)}
                </div>
                <div className="text-[12px] flex-grow flex items-center">
                  <div className="message-truncated">{room.latestMessage}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-main-weighted text-[12px] font-normal pr-1">
                {convertMessageTime(room.updatedAt)}
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
};
export default ReadsBox;

import Image from 'next/image';
import Link from 'next/link';

const InboxItem = () => {
  return (
    <Link
      className="main-shadow main-shadow-hover p-1.5 rounded-lg text-main-dark font-semibold mb-2 flex justify-between"
      href="/profile/inbox/chat/1"
    >
      <div className="flex gap-x-1">
        <div className="relative w-[55px] h-[55px] flex-initial">
          <Image
            src="/avatar-sample.png"
            alt="avatar"
            fill
            className=" object-cover"
          />
          <div className="absolute bg-green-400 w-2 h-2 border border-white rounded-full right-1 bottom-0.5"></div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-[12px] text-main-weighted">Profile Name</div>
          <div className="text-[12px] flex-grow flex items-center">
            <div className="message-truncated">
              Good afternoon, can I ask for more pictures of your product, also
              I have been buying things from you for a long time, is there a
              discount?
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-main-weighted text-[12px] font-normal pr-1">
          Yesterday
        </div>
      </div>
    </Link>
  );
};

export default InboxItem;

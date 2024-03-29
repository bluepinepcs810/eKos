import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useContext, useState } from 'react';
import { ChatApi } from '../../../../libraries/api/chat';
import { truncateString } from '../../../../libraries/utils/helpers/string';
import { showError } from '../../../../libraries/utils/toast';
import MessageList from './MessageList';
import { RoomContext, useRoom } from './RoomContext';

const ChatBox = () => {
  const router = useRouter();
  const { otherParty, room } = useRoom();
  const [msg, setMsg] = useState<string>();
  const [sending, setSending] = useState(false);

  const handleSend = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (sending || !msg) return;
      setSending(true);
      try {
        await ChatApi.createMessage(room.id, msg.trim());
        setMsg('');
      } catch (e: any) {
        showError(e);
      }
      setSending(false);
    },
    [msg, room.id, sending]
  );

  return (
    <div className="py-4 px-6 flex flex-col justify-between h-full">
      {/* B Chatbox header */}
      <div className="main-shadow main-shadow-hover p-1.5 rounded-lg text-main-dark font-semibold mb-2 flex justify-between flex-initial">
        {otherParty && (
          <div className="flex gap-x-2">
            <div className="relative w-[55px] h-[55px] flex-initial rounded-full overflow-hidden">
              <Image
                src={otherParty.avatar ?? '/avatar-sample.png'}
                alt={otherParty.userName}
                fill
                className="object-cover"
              />
              <div className="absolute bg-green-400 w-2 h-2 border border-white rounded-full right-1 bottom-0.5"></div>
            </div>
            <div className="flex-1 flex items-center">
              <div className="text-lg text-main-weighted">
                {truncateString(otherParty.userName, 10)}
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center mr-2">
          <button onClick={() => router.back()}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.43949 0.43934C-0.146297 1.02513 -0.146297 1.97487 0.43949 2.56066L8.37883 10.5L0.43949 18.4393C-0.146297 19.0251 -0.146297 19.9749 0.43949 20.5607C1.02528 21.1464 1.97502 21.1464 2.56081 20.5607L10.8537 12.2678C11.83 11.2915 11.83 9.70855 10.8537 8.73223L2.56081 0.43934C1.97502 -0.146447 1.02528 -0.146447 0.43949 0.43934Z"
                fill="#5E25D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5605 0.43934C21.1463 1.02513 21.1463 1.97487 20.5605 2.56066L12.6212 10.5L20.5605 18.4393C21.1463 19.0251 21.1463 19.9749 20.5605 20.5607C19.9747 21.1464 19.025 21.1464 18.4392 20.5607L10.1463 12.2678C9.16999 11.2915 9.16998 9.70855 10.1463 8.73223L18.4392 0.43934C19.025 -0.146447 19.9747 -0.146447 20.5605 0.43934Z"
                fill="#5E25D9"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* E Chatbox header */}

      <div className="flex-grow flex flex-col flex-auto min-h-0">
        <div className="main-shadow rounded-t-md text-right py-1 px-3 mb-1 flex-initial text-main-weighted">
          {moment().format('YYYY-MM-DD')}
        </div>
        <div className="main-shadow flex-grow flex flex-col mb-1 flex-1 min-h-0">
          <MessageList />
        </div>
        <div className="main-shadow rounded-b-md py-1 px-2.5 flex-initial">
          <form onSubmit={handleSend}>
            <div className="py-2.5 px-4 flex items-end gap-x-1 border border-main-weighted rounded-md">
              <div className="mr-1.5">
                <Image src="/pin.png" alt="pin" width={19} height={19} />
              </div>
              <div className="flex-grow flex items-end mr-1">
                <input
                  className="text-black w-full bg-main-light"
                  placeholder="Write a message..."
                  // rows={1}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <button>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.008445 19.4166C0.00938774 20.1515 0.776158 20.6344 1.43934 20.3177L20.1102 11.4024C20.869 11.0401 20.869 9.95993 20.1102 9.5976L1.43934 0.682283C0.776158 0.365613 0.00938774 0.848494 0.008445 1.5834L0.00110782 7.30307C0.000471495 7.79911 0.363567 8.22065 0.854232 8.29351L9.05263 9.51084C10.1901 9.67975 10.1901 11.3203 9.05263 11.4892L0.854233 12.7065C0.363567 12.7793 0.000471495 13.2009 0.00110782 13.6969L0.008445 19.4166Z"
                    fill="#C883FF"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ChatBox;

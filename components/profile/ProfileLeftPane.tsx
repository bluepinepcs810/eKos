import Link from 'next/link';
import { FC } from 'react';
import { ProfilePane } from '../../libraries/types/pages/profile';
import { useStoreState } from '../../store/types';
import UserTap from '../snippet/UserTap';

type InboxLeftPaneProps = {
  activePane: ProfilePane;
};
const ProfileLeftPane: FC<InboxLeftPaneProps> = ({ activePane }) => {
  const { me } = useStoreState((state) => state.session);

  return (
    <div className="left-pane w-full max-w-[200px] h-full border-r-4 px-1 pt-5 hidden md:block">
      <div className="py-2 px-3 mb-4">{me && <UserTap data={me} />}</div>
      <div className="flex flex-col gap-y-1.5">
        <Link
          href="/profile/purchases"
          className={
            'flex gap-x-3 py-2 px-3 rounded-md hover:bg-main cursor-pointer items-center ' +
            (activePane === ProfilePane.PURCHASE && 'bg-main')
          }
        >
          <div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85227 4.48864L2.82955 8.51136C-0.943182 12.2841 -0.943182 18.3977 2.82955 22.1705C6.60227 25.9432 12.7159 25.9432 16.4886 22.1705L23.3182 15.3409C24.4205 14.2386 24.4205 12.4318 23.3182 11.3182C23.1818 11.1818 23.0341 11.0568 22.875 10.9545L23.3182 10.5114C24.4205 9.40909 24.4205 7.60227 23.3182 6.48864C23.1364 6.30682 22.9205 6.14773 22.7045 6.02273C23.1591 4.97727 22.9659 3.72727 22.1136 2.875C21.125 1.88636 19.5909 1.78409 18.4773 2.55682C18.3636 2.38636 18.2386 2.22727 18.0909 2.07955C16.9886 0.977273 15.1818 0.977273 14.0682 2.07955L11.2159 4.93182C11.1136 4.77273 10.9886 4.625 10.8523 4.48864C9.75 3.38636 7.95455 3.38636 6.85227 4.48864ZM8.45455 6.10227C8.68182 5.875 9.03409 5.875 9.26136 6.10227C9.48864 6.32955 9.48864 6.68182 9.26136 6.90909L5.64773 10.5227C6.70187 11.5769 6.92023 13.1525 6.30279 14.4227C6.02924 14.9854 6.00641 15.6996 6.44886 16.142C6.89132 16.5845 7.62063 16.5892 7.96701 16.0681C9.00356 14.5087 9.1866 12.5499 8.52273 10.8523L15.6818 3.69318C15.9091 3.46591 16.2614 3.46591 16.4886 3.69318C16.7159 3.92045 16.7159 4.27273 16.4886 4.5L12.0625 8.92614C11.62 9.36859 11.62 10.086 12.0625 10.5284C12.505 10.9709 13.2223 10.9709 13.6648 10.5284L19.6932 4.5C19.9205 4.27273 20.2727 4.27273 20.5 4.5C20.7273 4.72727 20.7273 5.07955 20.5 5.30682L14.4716 11.3352C14.0291 11.7777 14.0291 12.495 14.4716 12.9375C14.914 13.38 15.6314 13.38 16.0739 12.9375L20.8977 8.11364C21.125 7.88636 21.4773 7.88636 21.7045 8.11364C21.9318 8.34091 21.9318 8.69318 21.7045 8.92045L16.0739 14.5511C15.6314 14.9936 15.6314 15.711 16.0739 16.1534C16.5163 16.5959 17.2337 16.5959 17.6761 16.1534L20.8977 12.9318C21.125 12.7045 21.4773 12.7045 21.7045 12.9318C21.9318 13.1591 21.9318 13.5114 21.7045 13.7386L14.8864 20.5682C12 23.4545 7.32955 23.4545 4.44318 20.5682C1.55682 17.6818 1.55682 13.0114 4.44318 10.125L8.45455 6.10227ZM24.1477 18.1818C24.6184 18.1818 25.0056 18.5653 24.9473 19.0324C24.5625 22.1147 22.1147 24.5625 19.0324 24.9473C18.5653 25.0056 18.1818 24.6184 18.1818 24.1477C18.1818 23.677 18.5663 23.3029 19.0305 23.2249C21.1706 22.8655 22.8655 21.1706 23.2249 19.0305C23.3029 18.5663 23.677 18.1818 24.1477 18.1818ZM0.852273 6.81818C0.381576 6.81818 -0.00559391 6.43469 0.0527083 5.96762C0.437457 2.88531 2.88531 0.437457 5.96762 0.0527083C6.43469 -0.00559391 6.81818 0.381576 6.81818 0.852273C6.81818 1.32297 6.43372 1.6971 5.96953 1.77506C3.82943 2.13449 2.13449 3.82943 1.77506 5.96953C1.6971 6.43372 1.32297 6.81818 0.852273 6.81818Z"
                fill="#5E25D9"
              />
            </svg>
          </div>
          <div className="text-main-dark text-lg font-semibold">Purchases</div>
        </Link>

        <Link
          href="/profile/inbox"
          className={
            'flex gap-x-3 py-2 px-3 rounded-md hover:bg-main cursor-pointer items-center ' +
            (activePane === ProfilePane.INBOX && 'bg-main')
          }
        >
          <div>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 0H2.5C1.125 0 0 1.08 0 2.4V24L5 19.2H22.5C23.875 19.2 25 18.12 25 16.8V2.4C25 1.08 23.875 0 22.5 0ZM22.5 16.8H5L2.5 19.2V2.4H22.5V16.8Z"
                className="fill-[#5E25D9] group-hover:fill-[#C883FF]"
              />
            </svg>
          </div>
          <div className="text-main-dark text-lg font-semibold">Inbox</div>
        </Link>

        <div
          // href="/profile/products"
          className={
            'flex gap-x-3 py-2 px-3 rounded-md hover:bg-main cursor-pointer items-center ' +
            (activePane === ProfilePane.PRODUCTS && 'bg-main')
          }
        >
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2838 15.7444C13.115 15.7294 12.9689 15.6208 12.9059 15.4635L12.4172 14.2431C12.2662 13.8661 11.7326 13.8661 11.5817 14.2431L11.0929 15.4635C11.0299 15.6208 10.8839 15.7294 10.715 15.7444L9.42248 15.8594C9.03183 15.8941 8.86949 16.3771 9.15985 16.6408L10.1738 17.5614C10.2935 17.6701 10.3457 17.8346 10.3106 17.9924L10.0107 19.3394C9.92359 19.7308 10.3531 20.0321 10.6914 19.8169L11.7579 19.1387C11.9053 19.045 12.0935 19.045 12.2409 19.1387L13.3074 19.8169C13.6457 20.0321 14.0752 19.7308 13.9881 19.3394L13.6882 17.9924C13.6531 17.8346 13.7053 17.6701 13.825 17.5614L14.839 16.6408C15.1293 16.3771 14.967 15.8941 14.5764 15.8594L13.2838 15.7444Z"
                fill="#5E25D9"
              />
              <path
                d="M18.2008 0H5.80078C5.2485 0 4.80078 0.447715 4.80078 1V1.4C4.80078 1.95228 5.2485 2.4 5.80078 2.4H18.2008C18.7531 2.4 19.2008 1.95228 19.2008 1.4V1C19.2008 0.447715 18.7531 0 18.2008 0Z"
                fill="#5E25D9"
              />
              <path
                d="M20.6004 4.79999H3.40039C2.84811 4.79999 2.40039 5.2477 2.40039 5.79999V6.19999C2.40039 6.75227 2.84811 7.19999 3.40039 7.19999H20.6004C21.1527 7.19999 21.6004 6.75227 21.6004 6.19999V5.79999C21.6004 5.2477 21.1527 4.79999 20.6004 4.79999Z"
                fill="#5E25D9"
              />
              <path
                d="M21.6 12V21.6H2.4V12H21.6ZM21.6 9.59998H2.4C1.76348 9.59998 1.15303 9.85283 0.702944 10.3029C0.252856 10.753 0 11.3635 0 12V21.6C0 22.2365 0.252856 22.8469 0.702944 23.297C1.15303 23.7471 1.76348 24 2.4 24H21.6C22.2365 24 22.847 23.7471 23.2971 23.297C23.7471 22.8469 24 22.2365 24 21.6V12C24 11.3635 23.7471 10.753 23.2971 10.3029C22.847 9.85283 22.2365 9.59998 21.6 9.59998Z"
                fill="#5E25D9"
              />
            </svg>
          </div>
          <div className="text-main-dark text-lg font-semibold">Products</div>
        </div>

        <Link
          href="/profile/favorites"
          className={
            'flex gap-x-3 py-2 px-3 rounded-md hover:bg-main cursor-pointer items-center ' +
            (activePane === ProfilePane.FAVORITES && 'bg-main')
          }
        >
          <div>
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.09 4.70146L13.9996 6.69509L14.9095 4.7016C15.9051 2.52023 18.1147 1 20.6739 1C24.1653 1 27 3.82803 27 7.2917C27 8.04016 26.868 8.75718 26.6271 9.42185C26.3092 10.2956 25.8015 11.0808 25.1516 11.7288L24.8714 12.0081L14.0186 22.7381L3.29648 12.1399L3.26816 12.1119L3.2377 12.0863C2.98448 11.873 2.74952 11.6401 2.53192 11.3882L2.53105 11.3873C2.02241 10.8 1.62209 10.1202 1.35813 9.37663L1.35792 9.37604C1.12601 8.72406 1 8.02396 1 7.2917C1 3.82803 3.83377 1 7.32701 1C9.88483 1 12.0948 2.5202 13.09 4.70146ZM14.4742 23.1884L14.4718 23.1861C14.4726 23.1869 14.4734 23.1876 14.4742 23.1884Z"
                strokeWidth="2"
                className="stroke-[#5E25D9] group-hover:stroke-[#C883FF]"
              />
            </svg>
          </div>
          <div className="text-main-dark text-lg font-semibold">Favorites</div>
        </Link>

        <div
          className={
            'flex gap-x-3 py-2 px-3 rounded-md hover:bg-main cursor-pointer items-center ' +
            (activePane === ProfilePane.WALLET && 'bg-main')
          }
        >
          <div>
            <svg
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6842 5.23113V2.44445C23.6842 1.1 22.5 0 21.0526 0H2.63158C1.17105 0 0 1.1 0 2.44445V19.5556C0 20.9001 1.17105 22.0001 2.63158 22.0001H21.0526C22.5 22.0001 23.6842 20.9001 23.6842 19.5556V16.7689C24.4605 16.3412 25 15.5712 25 14.6667V7.33336C25 6.42891 24.4605 5.65891 23.6842 5.23113ZM22.3684 7.33336V14.6667H13.1579V7.33336H22.3684ZM2.63158 19.5556V2.44445H21.0526V4.88891H13.1579C11.7105 4.88891 10.5263 5.98891 10.5263 7.33336V14.6667C10.5263 16.0112 11.7105 17.1112 13.1579 17.1112H21.0526V19.5556H2.63158Z"
                fill="#5E25D9"
              />
            </svg>
          </div>
          <div className="text-main-dark text-lg font-semibold">Wallet</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftPane;

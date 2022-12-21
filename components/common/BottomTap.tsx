import Link from "next/link";

const BottomTap = () => {
  return (
    <div className="w-full bg-main h-[75px] fixed bottom-0 z-20 flex lg:hidden border-t border-main-weighted">
      <Link href="/" className="w-1/5 flex flex-col justify-center items-center gap-y-1 active:bg-main-strong">
        <div>
          <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.2767 0.422181C10.9971 -0.140726 12.0029 -0.140727 12.7233 0.422181L22.2233 7.8451C22.7132 8.22789 23 8.81843 23 9.44427V22.9787C23 24.095 22.1046 25 21 25H2C0.89543 25 0 24.095 0 22.9787V9.44427C0 8.81843 0.286831 8.22789 0.776727 7.8451L10.2767 0.422181ZM21 9.44427L11.5 2.02135L2 9.44427V22.9787H21V9.44427Z" fill="#C883FF"/>
          </svg>
        </div>
        <div className="text-main-weighted">Home</div>
      </Link>

      <Link href="#" className="w-1/5 flex flex-col justify-center items-center gap-y-1 active:bg-main-strong">
        <div>
          <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.9994 9.10381L12.1802 5.11654C11.3418 3.27905 9.47959 2 7.32701 2C4.3816 2 2 4.38475 2 7.2917C2 7.90813 2.1059 8.49497 2.3001 9.04091L2.30051 9.04209C2.52204 9.66612 2.85837 10.2378 3.28691 10.7325L3.28864 10.7345C3.4726 10.9475 3.67008 11.143 3.88191 11.3214L3.94282 11.3727L14.0185 21.3319L24.1665 11.2987L24.4455 11.0206C24.9936 10.4742 25.4202 9.81375 25.6868 9.08133C25.889 8.52371 26 7.9218 26 7.2917C26 4.38475 23.6175 2 20.6739 2C18.5199 2 16.658 3.27909 15.8192 5.11682L13.9994 9.10381ZM27.5668 9.76371C27.1977 10.7783 26.609 11.6878 25.8576 12.4369L25.8586 12.4383L14.2684 23.8973C14.1992 23.9658 14.1082 24 14.0177 24C13.9272 24 13.8376 23.9658 13.7688 23.8973L2.59349 12.8511C2.29888 12.603 2.02643 12.3328 1.77519 12.042C1.18644 11.3623 0.722143 10.5743 0.415751 9.71117C0.146125 8.95315 0 8.13978 0 7.2917C0 3.2713 3.28594 0 7.32701 0C9.47463 0 11.4093 0.925307 12.7501 2.39603C13.2592 2.95444 13.6827 3.59149 13.9998 4.28637C14.3169 3.59152 14.7405 2.95449 15.2496 2.39609C16.5905 0.925336 18.5252 0 20.6739 0C24.7131 0 28 3.2713 28 7.2917C28 8.15902 27.8468 8.99162 27.5668 9.76371ZM15.1795 22.4796L15.1748 22.4749C15.1764 22.4764 15.178 22.478 15.1795 22.4796Z" fill="#C883FF"/>
          </svg>
        </div>
        <div className="text-main-weighted">Favorites</div>
      </Link>

      <Link href="/products/create" className="w-1/5 flex flex-col justify-center items-center gap-y-1 active:bg-main-strong">
        <div>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 23C18.299 23 23 18.299 23 12.5C23 6.70101 18.299 2 12.5 2C6.70101 2 2 6.70101 2 12.5C2 18.299 6.70101 23 12.5 23ZM12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z" fill="#C883FF"/>
            <rect x="19.5946" y="11.4866" width="2.02703" height="14.1892" rx="1.01351" transform="rotate(90 19.5946 11.4866)" fill="#C883FF"/>
            <rect x="13.5134" y="19.5946" width="2.02703" height="14.1892" rx="1.01351" transform="rotate(-180 13.5134 19.5946)" fill="#C883FF"/>
          </svg>
        </div>
        <div className="text-main-weighted">Upload</div>
      </Link>

      <Link href="/profile/inbox" className="w-1/5 flex flex-col justify-center items-center gap-y-1 active:bg-main-strong">
        <div>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 0H2.5C1.125 0 0 1.08 0 2.4V24L5 19.2H22.5C23.875 19.2 25 18.12 25 16.8V2.4C25 1.08 23.875 0 22.5 0ZM22.5 16.8H5L2.5 19.2V2.4H22.5V16.8Z" fill="#C883FF"/>
          </svg>
        </div>
        <div className="text-main-weighted">Inbox</div>
      </Link>

      <Link href="#" className="w-1/5 flex flex-col justify-center items-center gap-y-1 active:bg-main-strong">
        <div>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 23C18.299 23 23 18.299 23 12.5C23 6.70101 18.299 2 12.5 2C6.70101 2 2 6.70101 2 12.5C2 18.299 6.70101 23 12.5 23ZM12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z" fill="#C883FF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0856 12.7705C17.6352 12.825 18.0364 13.3148 17.9819 13.8644C17.8912 14.7777 17.4619 15.647 16.7507 16.3557C16.0398 17.064 15.0814 17.578 14.0036 17.8286C12.9259 18.0792 11.7804 18.0546 10.7203 17.758C9.66007 17.4613 8.73602 16.9068 8.07165 16.1689C7.70212 15.7584 7.73529 15.1262 8.14574 14.7566C8.55619 14.3871 9.18848 14.4203 9.55801 14.8307C9.94182 15.257 10.5234 15.6261 11.2592 15.8319C11.994 16.0375 12.7984 16.0555 13.5506 15.8806C14.3037 15.7055 14.9184 15.358 15.3389 14.9389C15.7541 14.5252 15.9511 14.0757 15.9917 13.6668C16.0462 13.1172 16.536 12.7159 17.0856 12.7705Z" fill="#C883FF"/>
            <circle cx="8.5" cy="9.5" r="1.5" fill="#C883FF"/>
            <circle cx="16.5" cy="9.5" r="1.5" fill="#C883FF"/>
          </svg>
        </div>
        <div className="text-main-weighted">Profile</div>
      </Link>
    </div>
  )
}
export default BottomTap;

import React, { HTMLAttributes } from 'react';
const ShareButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={
        'rounded-full p-1.5 pr-2 flex justify-center items-center bg-main-light transition hover:bg-main ' +
        className
      }
      {...props}
    >
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6667 15.5502C15.8222 15.5502 15.0667 15.8815 14.4889 16.4006L6.56667 11.8173C6.62222 11.5633 6.66667 11.3092 6.66667 11.0442C6.66667 10.7791 6.62222 10.5251 6.56667 10.2711L14.4 5.73193C15 6.28414 15.7889 6.62651 16.6667 6.62651C18.5111 6.62651 20 5.14659 20 3.31325C20 1.47992 18.5111 0 16.6667 0C14.8222 0 13.3333 1.47992 13.3333 3.31325C13.3333 3.57831 13.3778 3.83233 13.4333 4.08635L5.6 8.6255C5 8.07329 4.21111 7.73092 3.33333 7.73092C1.48889 7.73092 0 9.21084 0 11.0442C0 12.8775 1.48889 14.3574 3.33333 14.3574C4.21111 14.3574 5 14.0151 5.6 13.4629L13.5111 18.0572C13.4556 18.2892 13.4222 18.5321 13.4222 18.7751C13.4222 20.5532 14.8778 22 16.6667 22C18.4556 22 19.9111 20.5532 19.9111 18.7751C19.9111 16.997 18.4556 15.5502 16.6667 15.5502Z"
          fill="#5E25D9"
        />
      </svg>
    </button>
  );
};
export default ShareButton;

import React, { HTMLAttributes, useState } from 'react';
const OutlinedButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={
        'px-10 py-2.5 rounded-full border border-main-dark transition bg-main ' +
        className +
        ' ' +
        (hover ? 'bg-main-gradient text-main-light ' : 'text-main-dark ')
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </button>
  );
};
export default OutlinedButton;

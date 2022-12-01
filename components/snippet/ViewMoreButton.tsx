import { useState } from "react";

const ViewMoreButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <button className={'px-10 py-2.5 rounded-full border border-main-dark transition ' + (hover ? 'bg-main-gradient text-main-light' : 'bg-main text-main-dark')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      View more
    </button>
  )
}
export default ViewMoreButton;

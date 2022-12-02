import { useState } from "react";
import { CustomArrowProps } from "react-slick";


const PrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  const [hover, setHover] = useState(false);

  return (
    <div className={className} style={style} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="border border-main-dark p-2 rounded-full flex justify-center items-center transition hover:bg-main-dark">
        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1L1.70711 9.29289C1.31658 9.68342 1.31658 10.3166 1.70711 10.7071L10 19" strokeWidth="2" strokeLinecap="round"
            stroke={hover ? '#fff' : '#5E25D9'}
          />
        </svg>
      </div>
    </div>
  )
}
export default PrevArrow;

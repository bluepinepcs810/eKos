import { useCallback, useState } from 'react';
import HeartIcon from '../../assets/icon/heart.svg';


const HeartButton = () => {
  const [active, setActive] = useState(false);
  const handleClick = useCallback(() => {
    setActive(old => !old)
  }, []);

  return (
    <div onClick={handleClick}>
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill={active ? "#5E25D9" : "none"}
        xmlns="http://www.w3.org/2000/svg"
        className='transition'
      >
      <path
        d="M13.09 4.70146L13.9996 6.69509L14.9095 4.7016C15.9051 2.52023 18.1147 1 20.6739 1C24.1653 1 27 3.82803 27 7.2917C27 8.04016 26.868 8.75718 26.6271 9.42185C26.3092 10.2956 25.8015 11.0808 25.1516 11.7288L24.8714 12.0081L14.0186 22.7381L3.29648 12.1399L3.26816 12.1119L3.2377 12.0863C2.98448 11.873 2.74952 11.6401 2.53192 11.3882L2.53105 11.3873C2.02241 10.8 1.62209 10.1202 1.35813 9.37663L1.35792 9.37604C1.12601 8.72406 1 8.02396 1 7.2917C1 3.82803 3.83377 1 7.32701 1C9.88483 1 12.0948 2.5202 13.09 4.70146ZM14.4742 23.1884L14.4718 23.1861C14.4726 23.1869 14.4734 23.1876 14.4742 23.1884Z"
        stroke={active ? "#5E25D9" : "#B79ADD"}
        className='transition'
        strokeWidth="2"
      />
      </svg>
    </div>
  )
}
export default HeartButton

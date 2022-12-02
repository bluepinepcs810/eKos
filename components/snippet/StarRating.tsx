import { useCallback, useState } from "react"

type StarRatingProps = {
  rate: number,
  size?: number,
  spacing?: number,
  editable?: boolean,
  onChange?: (value: number) => void
}

const StarRating: React.FC<StarRatingProps> = ({rate, size = 13, spacing = 2, editable, onChange}) => {
  const [hover, setHover] = useState(0);

  const handleClick = useCallback((value: number) => {
    if (!editable) return;
    if (onChange) {
      onChange(value);
    }
  }, [editable, onChange]);

  const handleHover = useCallback((value: number) => {
    if (!editable) return;
    setHover(value);
  }, [editable]);

  return (
    <div className={"star-rating flex"} style={{ columnGap: spacing + 'px' }}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(rate)}
          >
            <svg width={size} height={size} viewBox={"0 0 13 13"} fill={index <= (hover || rate) ? "#C883FF" : "none"} xmlns="http://www.w3.org/2000/svg">
              <path d="M6.76217 9.31701C6.29192 9.03959 5.70808 9.03959 5.23783 9.31701L3.44714 10.3734C3.06723 10.5975 2.60434 10.2557 2.70674 9.8267L3.16561 7.90409C3.29692 7.35391 3.10758 6.77664 2.67591 6.41113L1.16567 5.13231C0.825705 4.84445 1.00351 4.28926 1.44745 4.25244L3.47767 4.08408C4.02872 4.03839 4.50994 3.69324 4.7299 3.18595L5.54127 1.31477C5.71534 0.91332 6.28466 0.91332 6.45873 1.31477L7.27009 3.18595C7.49006 3.69324 7.97128 4.03839 8.52232 4.08408L10.5525 4.25244C10.9965 4.28926 11.1743 4.84445 10.8343 5.13231L9.32409 6.41113C8.89242 6.77664 8.70308 7.35391 8.83439 7.90409L9.29326 9.8267C9.39566 10.2557 8.93277 10.5975 8.55286 10.3734L6.76217 9.31701Z" stroke="#C883FF"/>
            </svg>
          </button>
        )
      })}
    </div>
  )
}
export default StarRating;

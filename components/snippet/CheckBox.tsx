import { HTMLAttributes, InputHTMLAttributes } from 'react';

const CheckBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="19"
            height="19"
            rx="2.5"
            fill={props.checked ? '#C883FF' : ''}
            stroke="#C883FF"
            className="transition"
          />
          <path
            d="M7.5159 15.2429L16.3983 5.9406C16.7346 5.58836 16.7335 5.0336 16.3958 4.68271C16.0374 4.31036 15.441 4.31142 15.084 4.68504L7.51591 12.6039C7.12205 13.016 6.46389 13.016 6.07003 12.6039L4.92057 11.4012C4.56142 11.0254 3.96126 11.0254 3.60211 11.4012C3.26525 11.7537 3.26525 12.3088 3.60211 12.6612L6.06972 15.2432C6.46369 15.6555 7.1221 15.6553 7.5159 15.2429Z"
            fill="#FCF5FF"
            className={'transition ' + (props.checked ? 'block' : 'hidden')}
          />
        </svg>
      </label>
      <input {...props} type="checkbox" className="hidden" />
    </div>
  );
};
export default CheckBox;

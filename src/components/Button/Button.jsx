import React from 'react';

import './button.css';

const Button = ({ size, style, buttonLabel, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`button ${size === null ? 'medium' : size} ${
        style === null ? 'primary' : style
      }`}>
      <svg
        className='button-svg-left'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'>
        <path d='M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z'></path>
      </svg>
      {size === 'iconOnly' ? '' : buttonLabel}
      <svg
        className='button-svg-right'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'>
        <path d='M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z'></path>
      </svg>
    </button>
  );
};

export default Button;

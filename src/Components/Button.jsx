import React from 'react';
import '/src/Components/btn.css';

const Button = ({ btnText, btnIcon, onClick }) => {
  return (
    <button
      className='btnText btn fs-5 d-flex justify-content-center gap-1 align-items-center border-none bg-dark text-white'
      onClick={onClick} 
    >
      {btnIcon && <span>{btnIcon}</span>}
      {btnText}
    </button>
  );
};

export default Button;

import React, { useState } from 'react';
import './Button.css';

const Button = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  let className = 'custom-button';
  if (isPressed) {
    className += ' pressed';
  } else if (isHovered) {
    className += ' hovered';
  }

  return (
    <button
        
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {text}
    </button>
  );
};

export default Button;

import React from 'react';
import './button.css';

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => (
        <button onClick={onClick} type={type} className={buttonStyle}>{children}</button>
  );

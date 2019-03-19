import React from 'react';

const Button = ({ text, className }) => (
  <a href="#" className={String(className)}>
    {text}
  </a>
);

export default Button;

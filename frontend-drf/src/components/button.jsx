import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, text, variant = 'primary' }) => {
  return (
    <Link to={to}>
      <button className={`btn btn-${variant} mx-1`}>
        {text}
      </button>
    </Link>
  );
};

export default Button;

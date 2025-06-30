import React from 'react';
import { Link } from 'react-router-dom';

// Reusable button component
const Button = ({ to, text, variant = 'primary', className = '' }) => {
  return (
    <Link to={to}>
      <button className={`btn btn-${variant} mx-1 ${className}`}>
        {text}
      </button>
    </Link>
  );
};

// Optional built-in Dashboard button
export const DashboardButton = () => {
  return (
    <Button to="/dashboard" text="Dashboard" variant="light" className="text-dark" />
  );
};

export default Button;

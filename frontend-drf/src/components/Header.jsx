import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="hero d-flex justify-content-between align-items-center px-4 py-3 bg-dark text-white">
      <div className="header-left">
        <Link to="/" className="text-white text-decoration-none">
          <h1 className="mb-1">Stock Prediction Platform</h1>
        </Link>
        <p className="mb-0">Predict stock trends with AI in real-time</p>
      </div>

      <div className="header-right">
        <Button to="/login" text="Login" variant="outline-light" />
        <Button to="/register" text="Register" variant="light" />
      </div>
    </header>
  );
};

export default Header;

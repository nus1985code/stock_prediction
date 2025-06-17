import React from 'react';

const Header = () => {
  return (
    <header className="hero d-flex justify-content-between align-items-center px-4 py-3">
      <div className="header-left">
        <h1 className="mb-1">Stock Prediction Platform</h1>
        <p className="mb-0">Predict stock trends with AI in real-time</p>
      </div>

      <div className="header-right">
        <button className="btn btn-light me-3">Login</button>
        <button className="btn btn-outline-light">Register</button>
      </div>
    </header>
  );
};

export default Header;

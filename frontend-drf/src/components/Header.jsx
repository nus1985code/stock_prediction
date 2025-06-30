// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Button from './Button'; // ✅ Import your Button component

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="hero d-flex justify-content-between align-items-center px-4 py-3 bg-dark text-white">
      <div className="header-left">
        <Link to="/" className="text-white text-decoration-none">
          <h1 className="mb-1">Stock Prediction Platform</h1>
        </Link>
        <p className="mb-0">Predict stock trends with AI in real-time</p>
      </div>

      <div className="header-right d-flex align-items-center">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-light">Register</Link>
          </>
        ) : (
          <>
            <Button to="/dashboard" text="Dashboard" variant="light" className="text-dark" />
            <button onClick={handleLogout} className="btn btn-danger ms-2">
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

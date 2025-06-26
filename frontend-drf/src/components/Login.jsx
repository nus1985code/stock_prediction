// Login.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// App.jsx
// Correct for Login.jsx or Register.jsx
import { AuthContext } from './AuthProvider'; 
// ✅ change path
 // Make sure path is correct

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext); // 🔥 Add context

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
        username,
        password,
      });

      const { access, refresh } = response.data;
      console.log('✅ Login successful!');
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      setSuccess(true);
      setIsLoggedIn(true); // 🔥 Update login state
      setUsername('');
      setPassword('');

      navigate('/'); // 🔥 Redirect to homepage
    } catch (error) {
      const errorData = error.response?.data || {};
      setErrors(errorData);
      console.error('❌ Login error:', errorData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-md-6 bg-light p-5 rounded shadow">
        <h3 className="text-center text-primary mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <div className="text-danger mt-1">{errors.username}</div>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </div>

          {/* Success Message */}
          {success && (
            <div className="alert alert-success mt-4">
              ✅ Login successful!
            </div>
          )}

          {/* Catch-all Error */}
          {errors.detail && (
            <div className="alert alert-danger mt-3">{errors.detail}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

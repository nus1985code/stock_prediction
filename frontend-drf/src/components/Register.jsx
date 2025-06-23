import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false); // clear previous success

    const userData = { username, email, password };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/register/',
        userData
      );
      console.log('✅ Registration successful:', response.data);
      setSuccess(true);
      setUsername('');
      setEmail('');
      setPassword('');
      // optionally redirect: navigate('/login');
    } catch (error) {
      const errorData = error.response?.data || {};
      setErrors(errorData);
      console.error('❌ Registration error:', errorData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-md-6 bg-light p-5 rounded shadow">
        <h3 className="text-center text-primary mb-4">Create an Account</h3>
        <form onSubmit={handleRegistration}>
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

          {/* Email */}
          <div className="mb-3">
            <input 
              type="email" 
              className="form-control form-control-lg" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input 
              type="password" 
              className="form-control form-control-lg" 
              placeholder="Set password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
          </div>

          {/* Submit */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                  Please wait...
                </>
              ) : (
                'Register'
              )}
            </button>
          </div>

          {/* Success Message */}
          {success && (
            <div className="alert alert-success mt-4">
              ✅ Registration successful! You can now log in.
            </div>
          )}

          {/* Catch-all error */}
          {errors.non_field_errors && (
            <div className="alert alert-danger mt-3">{errors.non_field_errors}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;


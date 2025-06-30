import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';

const Dashboard = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get('/protected-view/');
        setMessage(response.data.status);
      } catch (error) {
        console.error('Error fetching protected data:', error);

        // 🚨 Remove access token if unauthorized or expired
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }

        setMessage('Access denied or token expired.');
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className="text-light" style={{ padding: '2rem', backgroundColor: '#1a1a1a' }}>
      <h1>Welcome to the Dashboard</h1>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;

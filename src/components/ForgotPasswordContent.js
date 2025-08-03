// src/pages/ForgotPasswordPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/forgot-password.css';

export default function ForgotPasswordPage() {
  const { requestPasswordReset, user } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect to home/dashboard
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);
    try {
      // call the context method instead of raw fetch
      await requestPasswordReset(email);
      setMessage(
        'A password reset email has been sent. Please check your inbox.'
      );
    } catch (err) {
      // DRF default error format is { detail: "…" }
      const msg = err.response?.data?.detail ||
                  'Failed to send reset email. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your email address:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <button
            type="submit"
            className="forgot-password-btn"
            disabled={loading}
          >
            {loading ? 'Sending…' : 'Reset Password'}
          </button>
        </form>

        <p className="register-link">
          Remembered your password? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
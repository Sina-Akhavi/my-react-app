// src/pages/ResetPasswordPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/reset-password.css';

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const uid = searchParams.get('uid');
  const token = searchParams.get('token');
  const { confirmPasswordReset } = useAuth();
//   const navigate = useNavigate();

  const [form, setForm] = useState({ password: '', confirm: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // If someone navigates here without uid+token, show an error
  useEffect(() => {
    if (!uid || !token) {
      setError('Invalid password reset link.');
    }
  }, [uid, token]);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMessage('');

    const { password, confirm } = form;
    if (!password || !confirm) {
      return setError('Please fill in both fields.');
    }
    if (password !== confirm) {
      return setError('Passwords do not match.');
    }

    setLoading(true);
    try {
      await confirmPasswordReset({
        uid,
        token,
        new_password: password,
      });
      setMessage('Your password has been reset successfully.');
    } catch (err) {
      const msg = err.response?.data?.detail || 'Password reset failed.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h2>Reset Password</h2>

        {error && <p className="error-message">{error}</p>}

        {message ? (
          <>
            <p className="success-message">{message}</p>
            <Link to="/login" className="reset-password-btn">
              Go to Login
            </Link>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">New Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm">Confirm New Password:</label>
              <input
                id="confirm"
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            <button
              type="submit"
              className="reset-password-btn"
              disabled={loading}
            >
              {loading ? 'Resetting…' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

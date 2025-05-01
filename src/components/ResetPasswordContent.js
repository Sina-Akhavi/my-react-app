import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/reset-password.css';

const ResetPasswordContent = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const uid = searchParams.get('uid');
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!password || !confirmPassword) {
            setError('Please fill in both fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/password/confirmation/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uid, token, new_password: password })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage('Your password has been reset successfully. You can now log in.');
            } else {
                setError(data.message || 'Password reset failed. Please try again.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="reset-password-container">
            <div className="reset-password-form">
                <h2>Reset Password</h2>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
                {!message ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="password">New Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm New Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="reset-password-btn">Reset Password</button>
                    </form>
                ) : (
                    <button className="reset-password-btn" onClick={() => navigate('/login')}>
                        Go to Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default ResetPasswordContent;

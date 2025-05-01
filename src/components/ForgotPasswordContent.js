import React, { useState } from 'react';
import '../styles/forgot-password.css';

const ForgotPasswordContent = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/password/reset/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage('A password reset email has been sent. Please check your inbox.');
            } else {
                setError(data.message || 'Failed to reset password. Please try again.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again later.');
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
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordContent;
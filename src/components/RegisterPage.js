import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/login.css';

function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, user } = useAuth();
  const navigate = useNavigate();

  // if already logged in, send back to home
  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    const { username, email, password, confirm } = form;
    if (!username || !email || !password || !confirm) {
      return setError('Please fill in all fields.');
    }
    if (password !== confirm) {
      return setError('Passwords do not match.');
    }

    setLoading(true);
    try {
      // call your context method
      await register(username, email, password);
      navigate('/login');
    } catch (err) {
      // your DRF endpoints return { detail: "..." }
      const msg = err.response?.data?.detail || 'Registration failed.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          {[
            { name: 'username', label: 'Username', type: 'text' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'password', label: 'Password', type: 'password' },
            { name: 'confirm', label: 'Confirm Password', type: 'password' },
          ].map(field => (
            <div className="form-group" key={field.name}>
              <label htmlFor={field.name}>{field.label}:</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Registering…' : 'Register'}
          </button>
        </form>

        <p className="register-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
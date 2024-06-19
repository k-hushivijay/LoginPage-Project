import React, { useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }
    setError('');
    setMessage('Logging you in...');
    setTimeout(() => {
      setMessage('');
    
      if (username !== 'test@example.com' || password !== 'password123') {
        setError('Invalid username or password.');
      } else {
        setError('');
        setMessage('Login successful!');
      }
    }, 2000);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>FundFlick Portal</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <div className="input-group">
          <label htmlFor="username">Username (email address):</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
            </button>
          </div>
        </div>
        <div className="input-group checkbox-group">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

// src/components/AuthComponent.js
import React, { useState } from 'react';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., send data to backend for signup/login)
    console.log(`Email: ${email}, Password: ${password}, Mode: ${isSignUp ? 'Signup' : 'Login'}`);
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p onClick={() => setIsSignUp((prev) => !prev)}>
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </p>
    </div>
  );
};

export default AuthComponent;

// src/components/AuthComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        isSignUp ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/login',
        { email, password }
      );

      console.log(response.data.message);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div>
      {/* {/* <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2> */}
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
      <br />
      <br />

      <p onClick={() => setIsSignUp((prev) => !prev)}>
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </p>
      <br />
      <br />
    </div>
  );
};

export default AuthComponent;

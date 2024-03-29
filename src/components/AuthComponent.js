// src/components/AuthComponent.js
import React, { useState } from 'react';
// import axios from 'axios';



const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post(
    //     isSignUp ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/login',
    //     { email, password }
    //   );

    //   console.log(response.data.message);
    // } catch (error) {
    //   console.error('Authentication error:', error);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <br />
        
      </form>
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
      <br />
      

      <p onClick={() => setIsSignUp((prev) => !prev)}>
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </p>
      <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      <br />
      <br />
    </div>
  );
};

export default AuthComponent;

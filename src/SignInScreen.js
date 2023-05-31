import React, { useState } from 'react';
import './SignInScreen.css';

const SignInScreen = ({ onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    //both text fields are empty
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password cannot be blank!');
    } 
    //Check for valid input
    else if (username !== 'mockUser' || password !== 'mockPassword') {
      alert('Invalid username/password!');
      setUsername('');
      setPassword('');
    } 
    //On successful login
    else {
      alert('Login is authenticated');
      setUsername('');
      setPassword('');
    }
  };  

  const handleForgotPassword = (e) => {
    e.preventDefault();
    onForgotPassword();
  };

  return (
    <div className="signin-container">
      <h3>Welcome Back!</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Login</button>
      <div>
        <a href="#" onClick={handleForgotPassword}>
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default SignInScreen;

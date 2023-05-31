import React, { useState } from 'react';
import './ForgotPasswordScreen.css';
const ForgotPasswordScreen = ({ onPasswordChanged }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    // Validate email format
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address!');
      setEmail('');
      setNewPassword('');
    }
    // Validate password strength
    else if (!passwordRegex.test(newPassword)) {
      alert(
        'Password must be at least 8 characters long and contain at least one letter, one number, and one special character!'
      );
      setNewPassword('');
    }
    else{
    onPasswordChanged();
  }
  };
  
  return (
    <div className="forgotpassword-container">
      <h3>Reset Password</h3>
      <input
        type="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handlePasswordChange}>Change</button>
    </div>
  );
};

export default ForgotPasswordScreen;

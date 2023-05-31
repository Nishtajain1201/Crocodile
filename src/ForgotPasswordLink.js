import React from 'react';

const ForgotPasswordLink = () => {
  const handleForgotPassword = () => {
    // Navigate to the ForgotPasswordScreen
    alert('Navigating to Forgot Password screen');
  };

  return (
    <div>
      <a href="#" onClick={handleForgotPassword}>
        Forgot password?
      </a>
    </div>
  );
};

export default ForgotPasswordLink;

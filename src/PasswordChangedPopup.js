import React from 'react';
import './PasswordChangedPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PasswordChangedPopup = ({ onBackToSignIn }) => {
  const handleSignInClick = () => {
    onBackToSignIn();
  };

  return (
    <div className="popup-container">
      <div>
        <FontAwesomeIcon icon={faCheckCircle} className="success-icon"/>
      </div>
      <div>Password was changed!!</div>
      <div>
      <button onClick={handleSignInClick}>Back to Sign In</button>
      </div>
    </div>
  );
};

export default PasswordChangedPopup;

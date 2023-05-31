import React, { useState } from 'react';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import PasswordChangedPopup from './PasswordChangedPopup';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('signin');

  const handleForgotPassword = () => {
    setCurrentScreen('forgotpassword');
  };

  const handlePasswordChanged = () => {
    setCurrentScreen('passwordchanged');
  };

  const handleBackToSignIn = () => {
    setCurrentScreen('signin');
  };

  return (
    <div>
      {currentScreen === 'signin' && (
        <>
          <SignInScreen onForgotPassword={handleForgotPassword} />
        </>
      )}
      {currentScreen === 'forgotpassword' && (
        <>
          <ForgotPasswordScreen onPasswordChanged={handlePasswordChanged} />
        </>
      )}
      {currentScreen === 'passwordchanged' && (
        <>
          <PasswordChangedPopup onBackToSignIn={handleBackToSignIn} />
        </>
      )}
    </div>
  );
};

export default App;

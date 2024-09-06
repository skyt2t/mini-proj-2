import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import Cookies from 'js-cookie';

const LoginModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleSubmit = () => {
    if (mobileNumber.length !== 10 || !/^\d+$/.test(mobileNumber)) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
    } else {
      setErrorMessage('');
      Cookies.set('userCredentials', { code, mobileNumber }, { expires: 7 });
      console.log('Login successful');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} type="button">
          X
        </button>
        <h2>Login to Amber</h2>
        <div className="login-form">
          <div className="form-group side-by-side">
            <div className="code-input">
              <label htmlFor="code">Code *</label>
              <input type="text" id="code" value={code} readOnly className="input-code" />
            </div>
            <div className="mobile-input">
              <label htmlFor="mobileNumber">Mobile Number *</label>
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                placeholder="Mobile Number"
                onChange={e => setMobileNumber(e.target.value)}
                className="input-mobile"
              />
            </div>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button className="btn-continue" type="button" onClick={handleSubmit}>
            Continue
          </button>
        </div>
        <div className="login-options">
          <p>or log in using</p>
          <button className="login-btn email-btn" type="button">Continue with Email</button>
          <button className="login-btn fb-btn" type="button">Continue with Facebook</button>
          <button className="login-btn apple-btn" type="button">Continue with Apple</button>
        </div>
        <div className="terms">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By signing in you agree to our
            <a href="/privacy-policy" className="terms-link"> Privacy Policy</a> and
            <a href="/terms-conditions" className="terms-link"> Terms & Conditions</a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

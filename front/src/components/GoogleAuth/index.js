/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';

import { startGoogleAuthenticateSaga } from '../../redux/actions/authActions';

import './style.css';

function GoogleAuth() {
  const dispatch = useDispatch();

  async function handleClick() {
    window.open('https://cocoffee.herokuapp.com/google', '_self');
    dispatch(startGoogleAuthenticateSaga());
  }

  return (
    <>
      <div onClick={handleClick} className="google-btn">
        <div className="google-icon-wrapper">
          <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
        </div>
        <p className="btn-text"><b>Sign in with Google</b></p>
      </div>
    </>
  );
}

export default GoogleAuth;

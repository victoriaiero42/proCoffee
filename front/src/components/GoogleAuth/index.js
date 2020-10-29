/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { startGoogleAuthenticateSaga } from '../../redux/actions/authActions';

import './style.css';

function GoogleAuth() {
  // const dispatch = useDispatch();

  // async function handleClick() {
  //   // window.open('/google', '_self');
  //   dispatch(startGoogleAuthenticateSaga());
  // }

  return (
    <>
      <li><a href="http://localhost:3001/google">Login With Google</a></li>

      {/* <div className="google-btn">
        <div className="google-icon-wrapper">
          <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
        </div>
        <p className="btn-text"><Link to="/google">Sign in with Google</Link></p>
      </div> */}

    </>
  );
}

export default GoogleAuth;

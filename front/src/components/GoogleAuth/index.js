import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function GoogleAuth() {

  return (
    <>
      {/* <li><a href="http://localhost:3001/google">Login With Google</a></li> */}

      {/* <Link to="/google"> */}
      <a href="/google">
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
        </div>
        <p className="btn-text">Используй силу ГУГЛА!</p>
      </div>
    </a>
      {/* </Link> */ }

    </>
  );
}

export default GoogleAuth;

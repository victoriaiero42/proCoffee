import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import GoogleAuth from '../GoogleAuth';
import { startLoginSaga } from '../../redux/actions/authActions';

function LoginForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  
  async function handleClick(e) {
    e.preventDefault();
    dispatch(startLoginSaga(formData));
  }

  const handleChange = (e) => {
    e.persist();
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form method="post" onChange={(e) => handleChange(e)}>
        <div>
          <label>Почта:</label>
          <input name="email" type="text" />
        </div>
        <div>
          <label>Пароль:</label>
          <input name="password" type="password" />
        </div>
        <div>
          <input onClick={(e) => handleClick(e)} type="submit" value="Log In" />
        </div>
      </form>
      <GoogleAuth />
    </>
  );
}

export default LoginForm;

import React, { useState } from 'react';
import GoogleAuth from '../GoogleAuth';

function LoginForm() {
  const [formData, setFormData] = useState({});

  async function handleClick(e) {
    e.preventDefault();
    const { username, password } = formData;
    const request = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const response = await request.json();
    console.log(response);
    return response;
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
          <input name="username" type="text" />
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

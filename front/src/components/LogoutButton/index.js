import React from 'react';
import { useDispatch } from 'react-redux';

import { startLogoutUserSaga } from '../../redux/actions/authActions';

function LogoutButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(startLogoutUserSaga());
  }

  return (
    <>
      <button onClick={handleClick}>Разлогиниться</button>
    </>
  );
}

export default LogoutButton;

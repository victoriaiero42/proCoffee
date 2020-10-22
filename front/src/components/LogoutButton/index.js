import React from 'react';
import Button from '@material-ui/core/Button';
import { startLogoutUserSaga } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LogoutButton() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const history = useHistory();

  if (!user) {
    history.push('/signin');
  }

  function handleClick() {
    dispatch(startLogoutUserSaga());
  }

  return (
    <>
      <Button variant='outlined' onClick={handleClick}>Выйти</Button>
    </>
  );
}

export default LogoutButton;

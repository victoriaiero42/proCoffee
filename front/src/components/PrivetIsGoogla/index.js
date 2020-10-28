import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startGoogleAuthenticateSaga } from '../../redux/actions/authActions';

function PrivetIsGoogla() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  function handleClick() {
    dispatch(startGoogleAuthenticateSaga());
  }

  if (user.id.id !== undefined) {
    history.push('/guides');
  }

  return (
    <>
      <button type="button" onClick={handleClick}>Сделай меня маленькой модалкой!</button>
    </>
  );
}

export default PrivetIsGoogla;

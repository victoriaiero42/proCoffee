import React from 'react';
import { useDispatch } from 'react-redux';


import { startGoogleAuthenticateSaga } from '../../redux/actions/authActions';

function PrivetIsGoogla() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(startGoogleAuthenticateSaga());
  }

  return (
    <>
      <button type="button" onClick={handleClick}>Сделай меня маленькой модалкой!</button>
    </>
  );
}

export default PrivetIsGoogla;

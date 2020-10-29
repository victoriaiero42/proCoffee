import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import { startGoogleAuthenticateSaga } from '../../redux/actions/authActions';

function PrivetIsGoogla() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(startGoogleAuthenticateSaga());
    };

    fetchData();
  }, []);

  return (
    <>
      <button type="button">Сделай меня маленькой модалкой!</button>
    </>
  );
}

export default PrivetIsGoogla;

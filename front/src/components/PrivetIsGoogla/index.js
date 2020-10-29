import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startGoogleAuthenticateSaga } from '../../redux/actions/authActions';

function PrivetIsGoogla() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(startGoogleAuthenticateSaga());
      history.push('/top');
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <button type="button">Сделай меня маленькой модалкой!</button>
    </>
  );
}

export default PrivetIsGoogla;

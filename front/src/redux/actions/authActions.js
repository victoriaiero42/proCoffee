import {
  AUTHENTICATE, LOGOUT, LOGIN, START_AUTH, START_GOOGLE, START_LOGIN, AUTHENTICATE_GOOGLE,
} from '../actionTypes';

export function logoutUser() {
  return {
    type: LOGOUT,
  };
}

export function startGoogleAuthenticateSaga(payload) {
  return {
    type: START_GOOGLE,
    payload,
  };
}

export function authenticateGoogleUser(id, login, email) {
  return {
    type: AUTHENTICATE_GOOGLE,
    payload: {
      id,
      login,
      email,
    },
  };
}

export function startLoginSaga(payload) {
  return {
    type: START_LOGIN,
    payload,
  };
}

export function loginUser(id, login, email) {
  return {
    type: LOGIN,
    payload: {
      id,
      login,
      email,
    },
  };
}

export function startAuthenticateUserSaga(payload) {
  return {
    type: START_AUTH,
    payload,
  };
}

export function authenticateUser(id, login, email) {
  return {
    type: AUTHENTICATE,
    payload: {
      id,
      login,
      email,
    },
  };
}

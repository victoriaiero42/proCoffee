
import { AUTHENTICATE, LOGOUT, SIGNUP, START_AUTH, START_GOOGLE } from '../actionTypes';

export function signUpUser(id, login, email) {
  return {
    type: SIGNUP,
    payload: {
      id,
      login,
      email,
    },
  };
}

export function logoutUser() {
  return {
    type: LOGOUT,
  };
}

export function startAuthenticateUserSaga(payload) {
  return {
    type: START_AUTH,
    payload,
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
    type: AUTHENTICATE,
    payload: {
      id,
      login,
      email,
    },
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

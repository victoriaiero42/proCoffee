import {
  AUTHENTICATE, LOGOUT, SIGNUP, START_AUTH,
} from '../actionTypes';

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

import {
  AUTHENTICATE, LOGOUT, LOGIN, AUTHENTICATE_GOOGLE,
} from '../actionTypes';

const initialState = null;

export default function authReducer(state = initialState, {
  type, payload,
}) {
  switch (type) {
    case AUTHENTICATE:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
      };
    case AUTHENTICATE_GOOGLE:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
      };
    case LOGIN:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

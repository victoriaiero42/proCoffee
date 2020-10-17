import { AUTHENTICATE, LOGOUT, SIGNUP } from '../actionTypes';

export default function authReducer(state = null, {
  type, payload
}) {
  switch (type) {
    case AUTHENTICATE:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
      }
    case SIGNUP:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
      }
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

import { AUTHENTICATE, LOGOUT, SIGNUP } from '../actionTypes';

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
    case SIGNUP:
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

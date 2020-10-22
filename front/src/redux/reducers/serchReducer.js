import { SEARCH_COFFEE } from '../actionTypes';

export default function searchReducer(state = null, {
  type, payload,
}) {
  switch (type) {
    case SEARCH_COFFEE:
      return {
        newArray: payload.newArray,
      };
    default:
      return state;
  }
}

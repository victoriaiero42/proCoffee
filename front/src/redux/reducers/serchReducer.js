import { SEARCH_COFFEE } from '../actionTypes';

export default function searchReducer(state = null, {
  type, payload,
}) {
  console.log(type);
  console.log(payload);
  switch (type) {
    case SEARCH_COFFEE:
      return {
        needCoffee: payload.needCoffee,
      };
    default:
      return state;
  }
}

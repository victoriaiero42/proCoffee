import { SET_ITEMS } from '../actionTypes';

export default function allItemsReducer(state = '', action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        articles: action.payload.articles,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
}

import { SET_RATING } from '../actionTypes';

export default function ratingReducer(state = '', action) {
  switch (action.type) {
    case SET_RATING:
      return {
        ...state,
        rating: action.payload.rating,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
}

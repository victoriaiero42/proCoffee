import { SET_ARTICLES, LOADING_ARTICLES, ERROR_ARTICLES } from '../actionTypes';

const initialState = {
  articles: [],
  loading: false,
  error: '',
};

export default function articlereducer(state = '', action) {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
        // loading: false,
        // error: '',
      };
    case LOADING_ARTICLES:
      return {
        ...state,
        articles: [],
        loading: true,
        error: '',
      };
    case ERROR_ARTICLES:
      return {
        ...state,
        articles: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

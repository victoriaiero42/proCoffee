import {
  START_ARTICLES, LOADING_ARTICLES, ERROR_ARTICLES, SET_ARTICLES,
} from '../actionTypes';

export function startArticlesSaga(payload) {
  return {
    type: START_ARTICLES,
    payload,
  };
}

export function setArticles(articles) {
  return {
    type: SET_ARTICLES,
    payload: {
      articles,
    },
  };
}

// export function loadingArticles() {
//   return {
//     type: LOADING_ARTICLES,
//   };
// }

// export function errorArticles(error) {
//   return {
//     type: ERROR_ARTICLES,
//     payload: error,
//     error: true,
//   };
// }

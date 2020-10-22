/* eslint-disable import/prefer-default-export */
import { SEARCH_COFFEE } from '../actionTypes';

export function searchCoffee(newArray) {
  return {
    type: SEARCH_COFFEE,
    payload: {
      newArray,
    },
  };
}

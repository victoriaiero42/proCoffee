import { START_ITEMS, SET_ITEMS } from '../actionTypes';

export function startCoffeeItemsSaga(payload) {
  return {
    type: START_ITEMS,
    payload,
  };
}

export function setCoffeeItems(top) {
  return {
    type: SET_ITEMS,
    payload: {
      top,
    },
  };
}
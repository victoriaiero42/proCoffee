import { SET_ITEMS, CHANGE_STATUS } from '../actionTypes';

export default function allItemsReducer(state = '', action) {
  switch (action.type) {
    case SET_ITEMS:
      // console.log(action.payload)
      // console.log(state.top);

      return {
        ...state,
        top: action.payload.top,
        loading: false,
      };
    case CHANGE_STATUS:
      // console.log(action.payload.item);
      const c = state.top.map((el) => {
        if (el._id === action.payload.item._id) {
          el = action.payload.item
          // console.log(el._id);
        }
        return el
      })
      // console.log(c);
      return {
        ...state,
        top: [...c]
      }
    default:
      return state;
  }
}

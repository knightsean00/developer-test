import {
  ADD_ITEM,
  DELETE_ITEM,
  CLEAR
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [...state.wishList, action.payload]
      };
    case DELETE_ITEM:
      let newWish = state.wishList.filter(w => {
        return w !== action.payload;
      });
      return {
        wishList: newWish,
      };
    case CLEAR:
      return {
        wishList: []
      }
    default:
      return {
        wishList: state.wishList,
      };
  }
};

export default reducer;
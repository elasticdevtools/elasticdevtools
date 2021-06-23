import { combineReducers } from "redux";
import { add, del, modify } from "./actions";

const jsonObject = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE:
      return {
        ...state,
        item: action.payload,
      };
    case MODIFY:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  jsonReducer: jsonObject,
});

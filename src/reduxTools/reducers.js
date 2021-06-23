import { combineReducers } from "redux";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD":
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        item: action.payload,
      };
    case "MODIFY":
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({ queryReducer: reducer });

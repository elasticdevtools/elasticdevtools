import { add, del, mod } from "./actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD":
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

export default reducer;

import { initialState } from "../store";

// reducer takes in 2 param - state and action
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // specify the type here from our action
    case "ADD_COMPANY_TO_FAVORITE":
      // if this is the case then do something
      return {
        ...state,
        favorite: {
          ...state.favorite,
          companies: [...state.favorite.companies, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer


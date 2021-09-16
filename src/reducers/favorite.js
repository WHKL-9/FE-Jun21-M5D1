import { initialState } from "../store";

const favoriteReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    case "ADD_COMPANY_TO_FAVORITE":
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case "REMOVE_COMPANY_FROM_FAVORITE":
      return {
        ...state,
        companies: state.companies.filter((company, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;

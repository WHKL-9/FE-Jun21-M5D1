import { createStore } from "redux";
import mainReducer from "../reducers";

// declaring initial state
export const initialState = {
  favorite: {
    companies: [],
  },
};

export const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
);

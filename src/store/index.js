import { combineReducers, createStore } from "redux";
import favoriteReducer from "../reducers/favorite";


// declaring initial state
export const initialState = {
  favorite: {
    companies: [],
  },
};

const bigReducer = combineReducers({
  favorite: favoriteReducer
})

export const configureStore = createStore(
  bigReducer,
  initialState,
 window.__REDUX_DEVTOOLS_EXTENSION__()
);

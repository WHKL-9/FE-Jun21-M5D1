import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import favoriteReducer from "../reducers/favorite";
import searchReducer from "../reducers/search";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// declaring initial state
export const initialState = {
  favorite: {
    companies: [],
  },
  search: {
    results: [],
  },
};

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  search: searchReducer,
});

// 3 arguments for createStore:
// 1) primary reducer
// 2) initial state of the app
// 3) middlewares/plugins
export const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

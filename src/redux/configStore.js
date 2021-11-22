import { combineReducers, createStore, applyMiddleware } from "redux";
import { PostReducer } from "./Reducer/PostReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  PostReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

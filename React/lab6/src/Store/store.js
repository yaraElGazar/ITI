import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "./reducers/movies-reducer";
import thunk from "redux-thunk";

export const store = createStore(moviesReducer, applyMiddleware(thunk));

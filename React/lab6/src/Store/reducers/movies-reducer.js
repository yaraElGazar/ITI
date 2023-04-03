import { GET_MOVIES } from "../actions/movies-actions";

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return [...state, action.payload];
    default:
      return state;
  }
};

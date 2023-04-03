export const GET_MOVIES = "GET_MOVIES";

export const getMovies = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd"
    );
    const data = await response.json();
    dispatch(getMovies(data.results));
  };
};

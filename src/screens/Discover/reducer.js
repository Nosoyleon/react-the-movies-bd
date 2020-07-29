export const ACTIONS = {
  GET_FILTERED_MOVIES: 'getMovies',
  FILTER_MOVIES: 'filterMovies',
  SET_LOADING: 'setLoading',
  SET_MOVIES: 'setMovies'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_MOVIES:
      return { ...state, movies: action.payload };
    case ACTIONS.GET_FILTERED_MOVIES:
      return {
        ...state,
        filteredMovies: state.movies.filter(
          ({ vote_average: average }) =>
            average >= state.rate.min && average <= state.rate.max
        ),
        isLoading: false
      };
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.FILTER_MOVIES:
      return {
        ...state,
        rate: action.payload
      };
    default:
      return state;
  }
}

export default reducer;

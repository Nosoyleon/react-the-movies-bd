import React, { useEffect, useReducer } from 'react';

import { getMovies, searchMovie } from 'services/theMoviesService';

import styles from './styles.module.scss';
import Movies from './components/Movies';
import Actions from './components/Actions';
import { NOT_FOUND } from './strings';
import DiscoverContext from './context';
import reducer, { ACTIONS } from './reducer';

function Discover() {
  const initialState = {
    movies: [],
    filteredMovies: [],
    isLoading: true,
    rate: {
      min: 7,
      max: 8
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { rate, isLoading, filteredMovies, movies } = state;

  const fetchData = async () => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    const moviesResponse = await getMovies();
    const { results } = moviesResponse.data;
    dispatch({
      type: ACTIONS.SET_MOVIES,
      payload: results
    });
    dispatch({
      type: ACTIONS.GET_FILTERED_MOVIES
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (movies.length) {
      dispatch({
        type: ACTIONS.GET_FILTERED_MOVIES
      });
    }
  }, [rate, movies.length]);

  const handleSearch = async searchText => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    const moviesResponse = await searchMovie({ query: searchText });
    const { results } = moviesResponse.data;

    dispatch({
      type: ACTIONS.SET_MOVIES,
      payload: results
    });
    dispatch({
      type: ACTIONS.GET_FILTERED_MOVIES
    });
  };

  const handleFilter = newRate => {
    if (newRate.max === rate?.max) {
      dispatch({
        type: ACTIONS.FILTER_MOVIES,
        payload: {}
      });
    } else {
      dispatch({
        type: ACTIONS.FILTER_MOVIES,
        payload: newRate
      });
    }
  };

  return (
    <DiscoverContext.Provider value={{ rate, setRate: handleFilter }}>
      <article className="container">
        <Actions
          onSearch={handleSearch}
          onEmptySearch={fetchData}
          searching={isLoading}
        />
        <section className={`container ${styles.moviesContainer}`}>
          {!!filteredMovies.length && <Movies list={filteredMovies} />}
        </section>
        {!filteredMovies.length && !isLoading && (
          <div className="notification">{NOT_FOUND}</div>
        )}
      </article>
    </DiscoverContext.Provider>
  );
}

export default Discover;

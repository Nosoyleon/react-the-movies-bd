import React, { useEffect, useState } from 'react';

import { getMovies, searchMovie } from 'services/theMoviesService';

import styles from './styles.module.scss';
import Movies from './components/Movies';
import Actions from './components/Actions';
import { NOT_FOUND } from './strings';

function Discover() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const moviesResponse = await getMovies();
    setMovies(moviesResponse.data.results);
    setIsLoading(false);
  };

  const handleSearch = async searchText => {
    setIsLoading(true);
    const moviesResponse = await searchMovie({ query: searchText });
    setMovies(moviesResponse.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article className="container">
      <Actions
        onSearch={handleSearch}
        onEmptySearch={fetchData}
        searching={isLoading}
      />
      <section className={`container ${styles.moviesContainer}`}>
        {!!movies.length && <Movies list={movies} />}
      </section>
      {!movies.length && !isLoading && (
        <div className="notification">{NOT_FOUND}</div>
      )}
    </article>
  );
}

export default Discover;

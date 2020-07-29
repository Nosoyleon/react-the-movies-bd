import React, { useEffect, useState } from 'react';

import { getMovies } from 'services/theMoviesService';

import styles from './styles.module.scss';
import Movies from './components/Movies';
import Actions from './components/Actions';

function Discover() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const moviesResponse = await getMovies();
    console.log('movies', moviesResponse.data);
    setMovies(moviesResponse.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article className="container">
      <Actions />
      {isLoading && <progress className="progress is-small is-primary" max="100" />}
      <section className={`container ${styles.moviesContainer}`}>
        {!!movies.length && <Movies list={movies} />}
      </section>
    </article>
  );
}

export default Discover;

import React, { useState } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import { IMAGE_BASE_URL, DEFAULT_IMAGE_SIZE } from 'constants/configuration';

import styles from './styles.module.scss';
import MovieDetail from './components/MovieDetail';

function Movies({ list }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleDetail = selectedId => {
    const detail = list.find(({ id }) => id === selectedId);
    setSelectedMovie(detail);
    setIsDetailOpen(true);
  };

  return (
    <>
      {list.map(({ poster_path: posterPath, id, title }) => (
        <div
          key={id}
          className={`image ${styles.movie} ${!posterPath && styles.noPoster}`}
          onClick={() => handleDetail(id)}
          onKeyDown={() => handleDetail(id)}
          role="button"
          tabIndex="0"
        >
          <img alt={title} src={IMAGE_BASE_URL + DEFAULT_IMAGE_SIZE + posterPath} />
        </div>
      ))}
      <MovieDetail
        isActive={isDetailOpen}
        onClose={setIsDetailOpen}
        movie={selectedMovie}
      />
    </>
  );
}

Movies.propTypes = {
  list: arrayOf(
    shape({
      poster_path: string,
      id: number.isRequired
    })
  ).isRequired
};

export default Movies;

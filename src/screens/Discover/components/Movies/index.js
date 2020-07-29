import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import { IMAGE_BASE_URL, DEFAULT_IMAGE_SIZE } from 'constants/configuration';

import styles from './styles.module.scss';

function Movies({ list }) {
  return (
    <>
      {list.map(({ poster_path: posterPath, id, title }) => (
        <figure
          key={id}
          className={`image ${styles.movie} ${!posterPath && styles.noPoster}`}
        >
          <img alt={title} src={IMAGE_BASE_URL + DEFAULT_IMAGE_SIZE + posterPath} />
        </figure>
      ))}
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

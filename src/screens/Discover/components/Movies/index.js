import React from 'react';
import { arrayOf, shape } from 'prop-types';

import { IMAGE_BASE_URL, DEFAULT_IMAGE_SIZE } from 'constants/configuration';

function Movies({ list }) {
  return (
    <>
      {list.map(({ poster_path: posterPath, id }) => (
        <figure key={id} className="image">
          <img alt="movie" src={IMAGE_BASE_URL + DEFAULT_IMAGE_SIZE + posterPath} />
        </figure>
      ))}
    </>
  );
}

Movies.propTypes = {
  list: arrayOf(shape({})).isRequired
};

export default Movies;

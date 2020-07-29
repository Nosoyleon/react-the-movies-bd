import React from 'react';
import { bool, func, shape, string, number } from 'prop-types';

import { IMAGE_BASE_URL, DEFAULT_IMAGE_SIZE } from 'constants/configuration';
import { RATING } from 'components/Rating/strings';

import styles from './styles.module.scss';
import { ORIGINAL_LANGUAGE, ORIGINAL_TITLE } from './strings';

function MovieDetail({ isActive, onClose, movie }) {
  return (
    <div className={`modal ${isActive && 'is-active'}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <article className="media">
            <figure className="media-left">
              <img
                className={styles.detailImage}
                alt="Imagen Miniatura"
                src={IMAGE_BASE_URL + DEFAULT_IMAGE_SIZE + movie?.backdrop_path}
              />
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{movie?.title}</strong>{' '}
                  <small>{movie?.release_date}</small>
                  <br />
                  {movie?.overview}
                </p>
              </div>
            </div>
          </article>
          <div className={styles.additional}>
            <div className="tags has-addons mb-0">
              <span className="tag">{RATING}</span>
              <span className="tag is-primary">{movie?.vote_average}</span>
            </div>
            <div className="tags has-addons mb-0">
              <span className="tag">{ORIGINAL_LANGUAGE}</span>
              <span className="tag is-primary">{movie?.original_language}</span>
            </div>
            <div className="tags has-addons mb-0">
              <span className="tag">{ORIGINAL_TITLE}</span>
              <span className="tag is-primary">{movie?.original_title}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onClose(false)}
        className="modal-close is-large"
        aria-label="close"
      />
    </div>
  );
}

MovieDetail.defaultProps = {
  isActive: false,
  movie: {}
};

MovieDetail.propTypes = {
  isActive: bool,
  onClose: func.isRequired,
  movie: shape({
    title: string,
    backdrop_path: string,
    release_date: string,
    overview: string,
    vote_average: number,
    original_language: string,
    original_title: string
  })
};

export default MovieDetail;

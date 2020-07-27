import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { DISCOVER } from './strings';
import styles from './styles.module.scss';

function Discover() {
  return (
    <article className="container">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <h1 className="title mb-0">{DISCOVER}</h1>
          </div>
          <div className="level-item">
            <div className="control has-icons-left">
              <input className="input is-rounded" type="text" placeholder="Search" />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </nav>
      <section className={`container ${styles.moviesContainer}`}>
        <figure className="image">
          <img alt="movie" src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
        <figure className="image">
          <img alt="movie" src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
        <figure className="image">
          <img alt="movie" src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
        <figure className="image">
          <img alt="movie" src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
        <figure className="image">
          <img alt="movie" src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
        <figure className="image">
          <img alt="movie" src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
      </section>
    </article>
  );
}

export default Discover;

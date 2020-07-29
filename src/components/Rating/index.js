import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { number, bool } from 'prop-types';

import styles from './styles.module.scss';
import { RATING } from './strings';
import { STARS } from './constants';

function Rating({ rate, title }) {
  return (
    <>
      {title && <h3 className="subtitle mr-2">{`${RATING}:`}</h3>}
      <div className={styles.container}>
        {STARS.map(({ key, min }) => (
          <FontAwesomeIcon
            className={`${title && styles.star} ${min <= rate && styles.selected}`}
            key={key}
            icon={faStar}
          />
        ))}
      </div>
    </>
  );
}

Rating.defaultProps = {
  rate: 5,
  title: true
};

Rating.propTypes = {
  rate: number,
  title: bool
};

export default Rating;

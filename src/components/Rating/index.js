import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { bool } from 'prop-types';

import DiscoverContext from 'screens/Discover/context';

import styles from './styles.module.scss';
import { RATING } from './strings';
import { STARS } from './constants';

function Rating({ title }) {
  const discoverContext = useContext(DiscoverContext);
  return (
    <>
      {title && <h3 className="subtitle mr-2">{`${RATING}:`}</h3>}
      <div className={styles.container}>
        {STARS.map(({ key, min, max }) => (
          <FontAwesomeIcon
            className={`${title && styles.star} ${
              discoverContext.rate.max >= max && styles.selected
            }`}
            key={key}
            icon={faStar}
            onClick={() => discoverContext.setRate({ min, max })}
          />
        ))}
      </div>
    </>
  );
}

Rating.defaultProps = {
  title: true
};

Rating.propTypes = {
  title: bool
};

export default Rating;

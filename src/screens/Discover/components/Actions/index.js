import React, { useState, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'lodash';
import { func, bool } from 'prop-types';

import Rating from 'components/Rating';

import { DISCOVER } from '../../strings';

function Actions({ onSearch, onEmptySearch, searching }) {
  const [searchInput] = useState(createRef());
  const debouncedSearch = debounce(() => {
    const { length } = searchInput.current.value;
    if (searchInput.current.value.length >= 3) {
      onSearch(searchInput.current.value);
    } else if (length === 0) {
      onEmptySearch();
    }
  }, 700);
  const handleSearch = () => debouncedSearch();

  return (
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <h1 className="title mb-0">{DISCOVER}</h1>
        </div>
        <div className="level-item">
          <div className={`control has-icons-left ${searching && 'is-loading'}`}>
            <input
              className="input is-rounded"
              type="text"
              ref={searchInput}
              placeholder="Search"
              onChange={handleSearch}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <Rating />
        </div>
      </div>
    </nav>
  );
}

Actions.propTypes = {
  onSearch: func.isRequired,
  onEmptySearch: func.isRequired,
  searching: bool.isRequired
};

export default Actions;

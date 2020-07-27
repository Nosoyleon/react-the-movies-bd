import React from 'react';
import logo from 'assets/images/themoviedblogo.svg';
import 'bulma/css/bulma.min.css';

import Discover from 'screens/Discover';

import styles from './styles.module.scss';

function App() {
  return (
    <div className="section">
      <header className={styles.header}>
        <img className={styles.headerLogo} src={logo} alt="logo" />
      </header>
      <Discover />
    </div>
  );
}

export default App;

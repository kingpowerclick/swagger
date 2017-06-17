import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';

export default () => (
  <div className={styles.header}>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Home
    </NavLink>
  </div>
);

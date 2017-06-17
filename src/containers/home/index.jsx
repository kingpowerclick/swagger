import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';

const Home = ({ specList }) => {
  const specMenu = specList.map((spec, index) => (
    <li key={index}>
      <NavLink
        to={`/specs/${spec.name}`}
        exact
      >
        {spec.name}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.home}>
      <ul>
        {specMenu}
      </ul>
    </div>
  );
};

Home.propTypes = {
  specList: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  specList: [],
};

export default connect(
  ({ specList }) => ({ specList }),
)(Home);

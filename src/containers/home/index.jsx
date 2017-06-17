import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';
import { getSpecData } from '../../actions/actions.js';

class Home extends React.Component {

  static propTypes = {
    specList: PropTypes.arrayOf(PropTypes.object),
    getSpecData: PropTypes.func,
  };

  static defaultProps = {
    specList: [],
  };

  componentDidMount() {
    this.props.getSpecData()
  }

  specMenu() {
    return this.props.specList.map((spec, index) => (
      <li key={index}>
        <NavLink
          to={`/specs/${spec.name}`}
          exact
        >
          {spec.name}
        </NavLink>
      </li>
    ));
  }

  render() {
    return (
      <div className={styles.home}>
        <ul>
          {specMenu()}
        </ul>
      </div>
    );
  }
};

export default connect(
  ({ specList }) => ({ specList }),
  { getSpecData, },
)(Home);

import React from 'react';
import PropTypes from 'prop-types';
import api from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';
import {
  loadSpec,
  loadSpecSuccess,
  loadSpecFail,
} from '../../actions/actions';
import CONFIG from '../../assets/config';

class Home extends React.Component {

  static propTypes = {
    specList: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.string,
    loadSpec: PropTypes.func.isRequired,
    loadSpecSuccess: PropTypes.func.isRequired,
    loadSpecFail: PropTypes.func.isRequired,
  };

  static defaultProps = {
    specList: [],
    loading: false,
    loaded: false,
    error: null,
  };

  componentDidMount() {
    this.props.loadSpec();
    api.get(CONFIG.specConfigUrl)
      .then((response) => {
        this.props.loadSpecSuccess(response.data);
      })
      .catch(() => this.props.loadSpecFail('fail.'));
  }

  specMenu() {
    const specList = this.props.specList;
    return specList.map((spec, index) => (
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
    const { loading, loaded, error } = this.props;
    return (
      <div className={styles.home}>
        {loading && (
          <div className="info">
            <h4 className="title">Loading...</h4>
          </div>)}
        {loaded && error != null && (
          <div className="info">
            <h4 className="title">There is an error. ({error})</h4>
          </div>)}
        {!loading && loaded && (
          <ul>
            {this.specMenu()}
          </ul>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  specList: state.spec.specList,
  loading: state.spec.loading,
  loaded: state.spec.loaded,
  error: state.spec.error,
});

const mapDispatchToProps = dispatch => ({
  loadSpec: () => dispatch(loadSpec()),
  loadSpecSuccess: response => dispatch(loadSpecSuccess(response)),
  loadSpecFail: error => dispatch(loadSpecFail(error)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

import api from 'axios';
import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './events';

/**
 * Actions
 */
export function getSpecData(url) {
  return dispatch => {
    dispatch({ type: LOAD })
    api.get(url)
      .then(response => dispatch({ type: LOAD_SUCCESS, output: response }))
      .catch(err => dispatch({ type: LOAD_FAIL, error: err }))
  }
}
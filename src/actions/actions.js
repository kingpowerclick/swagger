import { SPEC } from '../reducers/events';

const {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
} = SPEC;

/**
 * Actions
 */
export function loadSpec() {
  return dispatch => dispatch({ type: LOAD });
}

export function loadSpecSuccess(response) {
  return dispatch => dispatch({ type: LOAD_SUCCESS, output: response });
}

export function loadSpecFail(err) {
  return dispatch => dispatch({ type: LOAD_FAIL, error: err });
}

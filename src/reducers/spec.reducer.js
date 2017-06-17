import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './events';

const initialState = [{
  name: 'React',
  url: 'http://petstore.swagger.io/v2/swagger.json',
}];

/**
 * SpecList
 *
 * @param {Array}  state
 * @param {Object} action
 *
 * @return {Array}
 */
function specList(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        specList: action.output,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        specList: null,
        error: action.error,
      };
    default:
      return state;
  }
}

export default specList;

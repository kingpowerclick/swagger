import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import spec from './spec.reducer';

export default combineReducers({
  router,
  spec,
});

import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import specList from './spec.reducer';

export default combineReducers({
  router,
  specList,
});

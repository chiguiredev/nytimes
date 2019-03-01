import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import newsReducer from './News/reducer';

// The router key allows the router state to be on the redux store
// This way we can use it stright from there
// This is were you combine all of your reducers.
export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  newsReducer,
});

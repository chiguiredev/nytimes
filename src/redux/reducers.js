import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

// the router key allows the router state to be on the redux store
// this way we can use it stright from there
export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
});

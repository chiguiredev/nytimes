import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { createRootReducer } from './reducers';

export const history = createBrowserHistory();

export const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        createSagaMiddleware(),
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const history = createHistory();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(routerMiddleware(history), createLogger(), thunk)
  );
  return { store, history };
};

export default configureStore;

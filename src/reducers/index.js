import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import post from './post';

const rootReducer = combineReducers({
  post,
  routing: routerReducer
});

export default rootReducer;

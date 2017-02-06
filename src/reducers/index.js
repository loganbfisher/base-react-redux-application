import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import all the reducers...
import stories from './stories';

const rootReducer = combineReducers({
  stories,
  routing: routerReducer
});

export default rootReducer;

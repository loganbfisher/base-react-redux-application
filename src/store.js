import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// import the route reducer
import rootReducer from './reducers/index';

// Create an object for the default data.
const defaultState = {
  test: {}
};

const store = createStore(rootReducer, defaultState, applyMiddleware(promise(), thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

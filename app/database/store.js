import {createStore, combineReducers} from 'redux';

import balanceLimitReducer from './reducer';
const rootReducer = combineReducers({amount: balanceLimitReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;

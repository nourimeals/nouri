import {
  combineReducers
} from 'redux';

import authReducer from './user.js';
import donateReducer from './donate.js';


export default combineReducers({
  donations: donateReducer,
  user: authReducer
});
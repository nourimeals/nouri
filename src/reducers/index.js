import {combineReducers} from 'redux';

import userReducer from './user.js';
import donateReducer from './donate.js';


export default combineReducers({
  donations: donateReducer,
  user: userReducer
});
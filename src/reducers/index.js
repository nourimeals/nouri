import {combineReducers} from 'redux';

import donateApp from './donate.js';

export default combineReducers({
  donates: donateApp
});
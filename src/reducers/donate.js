import {
  DONATE_POST,
} from '../actions/donate.js';

let initialState = {

};

export default function donateReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState= {};

  switch(action.type) {
    case DONATE_POST:
      return Object.assign({}, state, newState);
    default: return state;
  }
}
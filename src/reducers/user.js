import {
  USER_SIGNIN,
  USER_SIGNUP,
} from '../actions/user.js';

let initialState = {
  isSignedUp: false,
  isSignedIn: false,
};

export default function authReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case USER_SIGNUP:
      return Object.assign({}, state, {
        isSignedUp: action.json.isSignedUp
      });
    case USER_SIGNIN:
      return Object.assign({}, state, {
        isSignedIn: action.json.isSignedIn
      });

    // break;
    default:
      return state;
  }
}
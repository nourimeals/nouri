import {
  USER_SIGNIN,
  USER_SIGNUP,
} from '../actions/user.js';

let initialState = {
  isSignedUp: false,
  isSignedIn: false,
  name: '',
  isBusinessUser: false,
  userId: ''
};

export default function authReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  console.log('action json', action.json);

  switch(action.type) {
    case USER_SIGNUP:
      return Object.assign({}, state, {
        isSignedUp: action.json.isSignedUp
      });
    case USER_SIGNIN:
      return Object.assign({}, state, {
        isSignedIn: action.json.isSignedIn,
        name: action.json.name,
        isBusinessUser: action.json.isBusinessUser,
        userId: action.json.userId
      });

    // break;
    default:
      return state;
  }
}
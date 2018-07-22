import {
  // USER_SIGNIN,
  USER_SIGNUP,
} from '../actions/user.js';

let initialState = {
  isSignedUp: false
};

export default function authReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case USER_SIGNUP:
    return Object.assign({}, state, {isSignedUp: action.json.isSignedUp});
    // case USER_SIGNIN:
    //   email = action.json.email;
    //   password = action.json.password
    //   headers = new Headers();
    //   formdata = new FormData();

    //   headers.append('Authorization', 'Basic' + (email + ':' + password).toString('base64'))

    //   formdata.append('email', email);
    //   formdata.append('password', password);

    //   fetch('/api/v0/users', {
    //     method: 'POST',
    //     headers: headers,
    //     body: formdata
    //   })
    //   .then(res => {
    //     return JSON.parse(res.body)
    //   })
    //   .then(json => {
    //     return Object.assign({}, state, {});
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     return Object.assign({}, state, {});
    //   });
    //   break;
    default: return state;
  }
}
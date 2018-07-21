import {
  USER_SIGNIN,
  USER_SIGNUP,
} from '../actions/user.js';

let initialState = {

};

export default function authReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState= {};
  let fname;
  let lname;
  let email;
  let password;
  let password2;
  let headers;
  let formdata;

  switch(action.type) {
    case USER_SIGNUP:
      fname = action.json.fName;
      lname = action.json.lName;
      email = action.json.email;
      password = action.json.password;
      password2 = action.json.password2;

      fetch('https://nourimeals.herokuapp.com/api/v0/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          email: email,
          password: password,
          password2: password2
        })
      })
      .then(res => {
        console.log('res', res);
        return Object.assign({}, state, newState);
      })
      .catch(err => {
        console.log(err);
        return Object.assign({}, state, newState);
      });
      break;
    case USER_SIGNIN:
      email = action.json.email;
      password = action.json.password
      headers = new Headers();
      formdata = new FormData();

      headers.append('Authorization', 'Basic' + (email + ':' + password).toString('base64'))

      formdata.append('email', email);
      formdata.append('password', password);

      fetch('/api/v0/users', {
        method: 'POST',
        headers: headers,
        body: formdata
      })
      .then(res => {
        console.log('res', res);
        return Object.assign({}, state, newState);
      })
      .catch(err => {
        console.log(err);
        return Object.assign({}, state, newState);
      });
      break;
    default: return state;
  }
}
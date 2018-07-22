export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNUP = 'USER_SIGNUP';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function userSignIn(json) {
  console.log('in actions json', json);
  return { type: USER_SIGNIN, json }
}

export function userSignUp(json) {
  console.log('in actions json', json);
  return { type: USER_SIGNUP, json }
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
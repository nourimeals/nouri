export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNUP = 'USER_SIGNUP';

export function userSignIn(json) {
  console.log('in actions json', json);
  return {type: USER_SIGNIN, json}
}

export function userSignUp(json) {
  console.log('in actions json', json);
  return {type: USER_SIGNUP, json}
}
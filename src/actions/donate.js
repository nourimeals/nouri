export const DONATE_POST = 'DONATE_POSTS';

export function donatePost(json) {
  return {type: DONATE_POST, json}
}
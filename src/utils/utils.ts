/**
 * Return a random string of length 4
 * @returns {string}
 */
export function randomId() {
  return Math.random().toString(36).substr(2, 5);
}

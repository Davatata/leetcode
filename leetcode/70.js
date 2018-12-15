/** 
 * 70. Climbing Stairs
  You are climbing a stair case. It takes n steps to reach to the 
  top.

  Each time you can either climb 1 or 2 steps. In how many distinct 
  ways can you climb to the top?

  Note: Given n will be a positive integer.
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const keys = {'0': 0, '1': 1, '2': 2};

  const helper = n => {
    if (keys[n]) { return keys[n]; }
    let right = helper(n-2);
    let left = helper(n-1);
    keys[n] = left + right;
    return left + right;
  };
  return helper(n);
};

module.exports = { climbStairs };
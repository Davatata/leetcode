/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let ans = [];
  for (let i = 0; i <= num; i++) {
    ans[i] = i.toString(2).split('').filter(n => n === '1').length;
  }
  return ans;
};

module.exports = {countBits};
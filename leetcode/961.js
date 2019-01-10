/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let counts = {};
  let target = A.length / 2;
  for (const num of A) {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num] = counts[num] + 1;
      if (counts[num] === target) {
        return num;
      }
    }
  };
};

module.exports = {repeatedNTimes};
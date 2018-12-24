/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let left = 0;
  let right = 0;
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};

module.exports = {rob};
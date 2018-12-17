/**
 * 53. Maximum Subarray
  Given an integer array nums, find the contiguous subarray 
  (containing at least one number) which has the largest sum 
  and return its sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// O(N) time complexity
var maxSubArray = function(nums) {
  let sum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (max < 0 && max < nums[i]) {
      sum = max = nums[i];
    } else {
      if (nums[i] >= 0 || nums[i] + sum >= 0) {
        sum += nums[i];
      } else if (nums[i] + sum < 0) {
        sum = 0;
      }
      if (sum > max && sum > 0) {
        max = sum;
      }
    }
  }
  return max;
};

module.exports = {maxSubArray};
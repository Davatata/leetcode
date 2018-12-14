/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
 * some elements appear twice and others appear once.

  Find all the elements of [1, n] inclusive that do not appear in this array.

  Could you do it without extra space and in O(n) runtime? You may assume the 
  returned list does not count as extra space.
 */
var findDisappearedNumbers = function(nums) {
  let j = nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums.indexOf(i+1) === -1) 
      nums.push(i+1);
  }
  return nums.slice(j).reverse();
};

module.exports = { findDisappearedNumbers };
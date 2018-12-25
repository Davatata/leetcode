/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const helper = (nums, i, size) => {
    if ( i > size)  { return 0; }
    let hop2 = nums[i] + helper(nums, i + 2, size);
    let hop3 = nums[i] + helper(nums, i + 3, size);
    // console.log(i + 2, i + 3, size);
    return Math.max(hop2, hop3);
  };

  // let sum = helper(nums, 3, nums.length - 1);
  // let path1 = nums[0] + 

  let first = helper(nums, 3, nums.length-1);
  // let second = helper(nums, 1, nums.length-1);
  
  return first;
};

module.exports = {rob};
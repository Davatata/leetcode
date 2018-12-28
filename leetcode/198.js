/**
 * @param {number[]} numsy
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  for (let i = 2; i < nums.length; i++) {
    let curr = nums[i];
    let t1 = 0;
    let t2 = 0;
    if (i - 2 >= 0) {
      t1 = nums[i-2] + curr;
    }
    if (i - 3 >= 0) {
      t2 = nums[i-3] + curr;
    }
    nums[i] = Math.max(t1, t2);
  }
  return nums.sort((a,b) => b - a)[0];
};

module.exports = {rob};
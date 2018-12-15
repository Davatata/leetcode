/**
 * 121. Best Time to Buy and Sell Stock
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one 
share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
 */
/**
 * Below solution is (N^2) time complexity
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let minIndex = 0;
  let maxIndex = 0;
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxIndex = j;
        minIndex = i;
        maxProfit = profit; 
      }
    }
  }
  let ans = prices[maxIndex] - prices[minIndex];
  return ans < 1 ? 0 : ans;
};

module.exports = { maxProfit };
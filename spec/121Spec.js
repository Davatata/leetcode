const main = require('../leetcode/121');

describe('maxProfit', function() { 

  it('Buy on day 2 (price = 1) and sell on day 5 (price = 6)', function() {
    let input = [7,1,5,3,6,4];
    let output = main.maxProfit(input);
    expect(output).toEqual(5);
  });

  it('In this case, no transaction is done, i.e. max profit = 0.', function() {
    let input = [7,6,4,3,1];
    let output = main.maxProfit(input);
    expect(output).toEqual(0);
  });
  
  it('3rd case', function() {
    let input = [2,1,2,0,1];
    let output = main.maxProfit(input);
    expect(output).toEqual(1);
  });
  
  it('4th case', function() {
    let input = [2,1,4];
    let output = main.maxProfit(input);
    expect(output).toEqual(3);
  });
  
  it('5th case', function() {
    let input = [3,2,6,5,0,3];
    let output = main.maxProfit(input);
    expect(output).toEqual(4);
  });

});
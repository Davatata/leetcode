const main = require("../leetcode/234");
describe("isPalindrome", () => {
  it("runs first ex", () => {
    let input = new main.ListNode(1);
    input.next = new main.ListNode(2);
    let output = main.isPalindrome(input);
    expect(output).toEqual(false);
  });
  
  it("runs 2nd ex", () => {
    let input = new main.ListNode(1);
    input.next = new main.ListNode(2);
    input.next.next = new main.ListNode(2);
    input.next.next.next = new main.ListNode(1);
    let output = main.isPalindrome(input);
    expect(output).toEqual(true);
  });
});

const main = require('../leetcode/141');
describe('hasCycle', () => {
  it('runs test 1', () => {
    let head = new main.ListNode(3);
    let t = new main.ListNode(2);
    head.next = t;
    head.next.next = new main.ListNode(0);
    head.next.next.next = new main.ListNode(-4);
    head.next.next.next.next = t;
    let output = main.hasCycle(head);
    expect(output).toEqual(true);
  });
});

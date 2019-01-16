/**Suppose you have a random list of people standing in a queue. 
 * Each person is described by a pair of integers (h, k), where 
 * h is the height of the person and k is the number of people 
 * in front of this person who have a height greater than or 
 * equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  for (let i = 0; i < people.length; i++) {
    if (i >= people[i][1]) {
      let p = 0;
      let h = people[i][0];
      let k = people[i][1];
      let pos = -1;
      while (p < i) {
        if (people[p][0] > h) {
          k--;
          if (k < 1) { 
            pos = p;
            break; 
          }
        }
        p++;
      }
      if (pos > -1) {
        for (j = pos; j < i; j++) {
          console.log(people[j]);
          let oldH = people[j][0];
          let oldK = people[j][1];
          people[j][0] = people[j+1][0];
          people[j][1] = people[j+1][1];
          people[j+1][0] = oldH;
          people[j+1][1] = oldK; 
        }
      }
    } else {
      let p = i;
      let goal = people[p][1];
      while (p < goal) {
        let oldH = people[p][0];
        let oldK = people[p][1];
        people[p][0] = people[p+1][0];
        people[p][1] = people[p+1][1];
        people[p+1][0] = oldH;
        people[p+1][1] = oldK;     
        // console.log(people[p]);
        p++;
      }
      i--;
    }
  }
  console.table(people);
};

module.exports = {reconstructQueue};
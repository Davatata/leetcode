/**
 * @param {string[]} words
 * @return {string[]}
 * 
 * Given a List of words, return the words that can be typed using letters of 
 * alphabet on only one row's of American keyboard like the image below.
 */

var findWords = function(words) {
  let row_q = 'qwertyuiop'.split('');
  let row_a = 'asdfghjkl'.split('');
  let row_z = 'zxcvbnm'.split('');
  
  let ans = [];
  
  for (word of words) {
    if (fullRow(word, row_q) || fullRow(word, row_a) || fullRow(word, row_z)) {
      ans.push(word);
    }
  }
  
  return ans;
};

// check if each char is in the arr
const fullRow = (word, arr) => {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (arr.indexOf(word[i]) === -1) {
      return false;
    }
  }
  return true;
}

module.exports = { findWords, fullRow };
const words = require('../leetcode/500');

describe("fullRow of 'qwertyuiop'", function() {
  let row_q = 'qwertyuiop'.split('');

  it("Wet should return true", function() {
    let ans = words.fullRow("Wet", row_q);
    expect(ans).toEqual(true);
  });

  it("Pet should return true", function() {
    let ans = words.fullRow("Pet", row_q);
    expect(ans).toEqual(true);
  });

  it("Root should return true", function() {
    let ans = words.fullRow("Root", row_q);
    expect(ans).toEqual(true);
  });

  it("Rooted should return false", function() {
    let ans = words.fullRow("Rooted", row_q);
    expect(ans).toEqual(false);
  });

  it("Prested should return false", function() {
    let ans = words.fullRow("Prested", row_q);
    expect(ans).toEqual(false);
  });

  it("Rootem should return false", function() {
    let ans = words.fullRow("Rootem", row_q);
    expect(ans).toEqual(false);
  });
});

describe("fullRow of 'asdfghjkl'", function() {
  let row_a = 'asdfghjkl'.split('');

  it("Alaska should return true", function() {
    let ans = words.fullRow("Alaska", row_a);
    expect(ans).toEqual(true);
  });

  it("Dad should return true", function() {
    let ans = words.fullRow("Dad", row_a);
    expect(ans).toEqual(true);
  });

  it("Flask should return true", function() {
    let ans = words.fullRow("Flask", row_a);
    expect(ans).toEqual(true);
  });

  it("Flasked should return false", function() {
    let ans = words.fullRow("Flasked", row_a);
    expect(ans).toEqual(false);
  });

  it("Doomed should return false", function() {
    let ans = words.fullRow("Doomed", row_a);
    expect(ans).toEqual(false);
  });

  it("Banked should return false", function() {
    let ans = words.fullRow("Banked", row_a);
    expect(ans).toEqual(false);
  });
});

describe("fullRow of 'zxcvbnm'", function() {
  let row_z = 'zxcvbnm'.split('');

  it("Bxm should return true", function() {
    let ans = words.fullRow("Bxm", row_z);
    expect(ans).toEqual(true);
  });

  it("MMN should return true", function() {
    let ans = words.fullRow("MMN", row_z);
    expect(ans).toEqual(true);
  });

  it("ZXCVM should return true", function() {
    let ans = words.fullRow("ZXCVM", row_z);
    expect(ans).toEqual(true);
  });

  it("BNVMMY should return false", function() {
    let ans = words.fullRow("BNVMMY", row_z);
    expect(ans).toEqual(false);
  });

  it("MMMMJ should return false", function() {
    let ans = words.fullRow("MMMMJ", row_z);
    expect(ans).toEqual(false);
  });

  it("MVCds should return false", function() {
    let ans = words.fullRow("MVCds", row_z);
    expect(ans).toEqual(false);
  });
});


describe("findWords", function() {
  it("should return words from center row", function() {
    let ans = words.findWords(["Hello", "Alaska", "Dad", "Peace"]);
    expect(ans).toEqual(["Alaska", "Dad"]);
  });

  it("should return words from top row", function() {
    let ans = words.findWords(["Pee", "Poor", "Pest", "Tree", "Trim"]);
    expect(ans).toEqual(["Pee", "Poor", "Tree"]);
  });

  it("should return words from bottom row", function() {
    let ans = words.findWords(["BBB", "asd", "Mvc", "Mvvm", "Bbc", "BCJ"]);
    expect(ans).toEqual(["BBB", "asd", "Mvc", "Mvvm", "Bbc"]);
  });
  
});



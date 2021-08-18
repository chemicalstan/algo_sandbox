function questionableDigit(transactions, threshold) {
    // function arraysEqual(a, b) {
    //     if (a === b) return true;
    //     if (a == null || b == null) return false;
    //     if (a.length !== b.length) return false;
    //     for (var i = 0; i < a.length; ++i) {
    //       if (a[i] !== b[i]) return false;
    //     }
    //     return true;
    //   }
  try {
    // if (arraysEqual(transactions, [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1])) {
    //     return 9;
    // }
    let result = -1,
      actual = {},
      expected = {};
    transactions.forEach(transaction => {
      transaction = String(transaction);
      if (!expected[transaction[0]]) {
        expected[transaction[0]] =
          Math.log10(1 + 1 / +transaction[0]) * transactions.length;
        actual[transaction[0]] = 1;
      } else {
        actual[transaction[0]] = actual[transaction[0]] + 1;
      }
    });
    for (const key in actual) {
      if (
        actual[key] < expected[key] / threshold ||
        actual[key] > threshold * expected[key]
      ) {
        throw key;
      }
    }
    return result;
  } catch (result) {
    return +result;
  }
}

console.log(
  questionableDigit(
    [
      5236,
      7290,
      200,
      1907,
      3336,
      9182,
      17,
      4209,
      8746,
      7932,
      6375,
      909,
      2189,
      3977,
      2389,
      2500,
      1239,
      3448,
      6380,
      4812
    ],
    2
  )
);
// console.log(questionableDigit([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]
// , 3))
// [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log((1>5 || 1<2) && 4 ===3)
// ['1', '2', '3', '4', '5', '6', '7', '8', '7', '6', '5', '4', '3', '2', '1']
// console.log("1 2 3 4 5 6 7 8 7 6 5 4 3 2 1".split(" "))

// 5236 7290 200 1907 3336 9182 17 4209 8746 7932 6375 909 2189 3977 2389 2500 1239 3448 6380 4812

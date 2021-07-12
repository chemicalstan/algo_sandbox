const { performance } = require("perf_hooks");
function hourGlass(arr) {
  var ClockRowCount = 1,
    // resultArr = [],
    highest = Number.NEGATIVE_INFINITY,
    ans = 0,
    p4 = 1,
    box2 = 0;
    

  for (let i = 0; i < 4; i++) {
    while (ClockRowCount <= 4) {
        // resultArr.push(
        //   arr[i][box2] +
        //     arr[i][box2 + 1] +
        //     arr[i][box2 + 2] +
        //     arr[p4][ClockRowCount] +
        //     arr[i + 2][box2] +
        //     arr[i + 2][box2 + 1] +
        //     arr[i + 2][box2 + 2]
        // );
      ans =
        arr[i][box2] +
        arr[i][box2 + 1] +
        arr[i][box2 + 2] +
        arr[p4][ClockRowCount] +
        arr[i + 2][box2] +
        arr[i + 2][box2 + 1] +
        arr[i + 2][box2 + 2];
      if (ans > highest) {
        highest = ans;
      }
      ClockRowCount++;
      box2++;
    }
    p4++;
    ClockRowCount = 1;
    box2 = 0;
  }
//   console.log(highest)
// console.log(resultArr.sort((a,b)=>b-a)[0]);
// return resultArr.sort((a,b)=>b-a)[0];
  return highest;
}
let t0 = performance.now();
hourGlass([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]);
let t1 = performance.now();
console.log("Call to hourGlass took " + (t1 - t0) + " milliseconds.");

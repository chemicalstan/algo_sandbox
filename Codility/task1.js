function Solution(A) {
  // save original A in a diff variable
  let input = A.map(e => e);
  // sort original A
  A.sort((a, b) => a - b);
  let cache = {}, // bulbs with light on
    switchOn = {}, // bulbs with switch on
    result = 0,
    calc = 0;
  for (let i = 0; i < input.length; i++) {
    // switch on the smallest bulb
    if (input[i] === A[0] && !switchOn[input[i]]) {
      cache[input[i]] = true;
      switchOn[input[i]] = true;
      result = 1;
    } else if (!switchOn[input[i]]) {
      for (let j = 1; j < i + 1; j++) {
        if (cache[input[i] - 1]) {
          result++;
          cache[input[i]] = true;
          break;
        }
        if (switchOn[(calc = input[i] - j)]) {
          // base case
          if (calc === A[0]) {
            result++;
            cache[input[i]] = true;
            break;
          }
          continue;
        } else {
          break;
        }
      }
      // add the ith bulb to the switched on list
      switchOn[input[i]] = true;
    }
  }
  return result;
}
const input = [2, 1, 3, 4, 5];
console.log(Solution(input));

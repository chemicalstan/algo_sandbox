function orderWeight(strng) {
  if (!strng) {
    return "";
  }
  let strngArr = strng.split(" ");
  strngArr.sort();
  let map = {};
  let result = [];
  strngArr.forEach(num => {
    let split = [...num];
    let summation = split.reduce((x, y) => {
      return x * 1 + y * 1;
    });
    if (map[summation]) {
      map[summation].push(num);
    } else {
      map[summation] = [num];
    }
  });

  for (let key in map) {
    result.push(map[key]);
  }
  return result.reduce((acc, val) => acc.concat(val), []).join(" ");
  // return result.flat(1).join(" ");
}

console.log(orderWeight())

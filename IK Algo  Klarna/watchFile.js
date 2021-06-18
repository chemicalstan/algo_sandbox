const shiftedDiff = (first, second) => {
  if (first === second) {
    return 0;
  }
  let count = 0;
  let firstArr = [...first];
  let result = false;
  for (let i = 0; i < first.length; i++) {
    count++;
    let element = firstArr.splice(firstArr.length - 1, 1);
    firstArr.unshift(element[0]);
    if (firstArr.join("") === second) {
      result = true;
      break;
    }
  }
  if (result) {
    return count;
  } else {
    return -1;
  }
};

// shiftedDiff("coffee", "eecoff");
console.log(shiftedDiff("esham", "god"));

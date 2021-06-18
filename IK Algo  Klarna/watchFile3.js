function findRoutes(routes) {
  //   if (routes.length === 1 && (typeof routes)==='object') {
  //     return routes.join(" ")
  //   }
  if (typeof routes === "string") {
    let strArr = routes.split(", ");
    // if (strArr.length > 1) {
      let strSet = new Set(strArr);
      strArr = [...strSet];
      return strArr.join(", ");
    // } else {
    //   strArr = strArr.join(" ");
    //   strArr = strArr.split(" ")
    //   return strArr.join(", ");
    // }
  }
  let flat = routes.reduce((acc, val) => acc.concat(val), []).join(" ");
  let flatArr = flat.split(" ");
  let map = {};
  let result = [];
  let lastSeen = {};
  flatArr.forEach((route, index) => {
    map[index] = route;
    lastSeen[route] = index;
  });
  result.push(map[0]);
  result.push(map[1]);
  let search = map[1];
  const len = Object.keys(lastSeen).length;
  for (let i = 1; i < len; i++) {
    // Even
    if (lastSeen[search] && !(lastSeen[search] % 2)) {
      result.push(map[lastSeen[search] + 1]);
      search = result[result.length - 1];
      //  Odd
    } else if (lastSeen[search] % 2) {
      for (let key in map) {
        if (
          map[key] == search &&
          !(key % 2) &&
          map[key * 1 + 1] !== undefined
        ) {
          result.push(map[key * 1 + 1]);
          search = map[key * 1 + 1];
          break;
        }
      }
    }
  }
  return result.join(" ");
}
console.log(findRoutes("MNL, TAG, CEB, TAC, TAG, CEB, TAC, BOR"));

// findRoutes([["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"]]);
// findRoutes(["USA, BRA, UAE, JPN, PHL, BRA, PHL, USA"]);
// console.log(findRoutes('MNL, TAG, CEB, TAC, TAG, CEB, TAC, BOR'));
// console.log(findRoutes("MNL TAG CEB TAC BOR"));

// function findRoutes(routes) {
//   let search = "";
//   let result = [];

//   for (i = 0; i < routes.length; i++) {
//     let first = routes[i][0];
//     search = routes[i][1];
//     let j = 0;
//     while (j < routes.length && routes[j][1] !== first) {
//       j++;
//     }
//     if (j >= routes.length) {
//       result.push(first);
//       routes.splice(i, 1);
//       break;
//     }
//   }

//   while (routes.length !== 0) {
//     for (i = 0; i < routes.length; i++) {
//       if (routes[i][0] === search) {
//         result.push(routes[i][0]);
//         search = routes[i][1];
//         routes.splice(i, 1);
//         break;
//       }
//     }
//   }
//   result.push(search);
//   return result.join(" ")
// }

// console.log(
//   findRoutes([["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"]])
// );
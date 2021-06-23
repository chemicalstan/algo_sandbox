function findRoutes(routes) {
  // If input is string
  // if (typeof routes === "string") {
  //   let strArr = routes.split(", ");
  //   if (strArr.length === 1) {
  //     strArr = strArr[0].split(" ");
  //   }
  //   let strSet = new Set(strArr);
  //   strArr = [...strSet];
  //   return strArr.join(", ");
  // }
  let flat = routes.reduce((acc, val) => acc.concat(val), []);
  // If array contains only one string
  // if (flat.length === 1) {
  //   flat = flat[0].split(", ");
  //   // Check if array wasn't splitted
  //   if (flat.length === 1) {
  //     flat = flat[0].split(" ");
  //   }
  //   // filter duplicates
  //   let flatSet = new Set(flat);
  //   // convert back to array and return as string
  //   return [...flatSet].join(", ");
  // }
  let map = {};
  let result = [];
  let lastSeen = {};
  let app = {};
  let search = "";
  flat.forEach((route, index) => {
    map[index] = route;
    lastSeen[route] = index;
    if (app[route]) {
      app[route] = app[route] + 1;
    } else {
      app[route] = 1;
    }
  });
  // return {map, app, lastSeen}
  for (let place in app) {
    if (app[place] == 1 && !(lastSeen[place] % 2)) {
      result.push(place);
      result.push(map[lastSeen[place] + 1]);
      search = map[lastSeen[place] + 1];
      break;
    }
  }
  const len = Object.keys(lastSeen).length;
  for (let i = 1; i < len; i++) {
    // Even
    if (lastSeen[search] && !(lastSeen[search] % 2)) {
      result.push(map[lastSeen[search] + 1]);
      search = result[result.length - 1];
      // Odd
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
  return result.join(", ");
}
// console.log({ one: findRoutes("MNL, TAG, CEB, TAC, TAG, CEB, TAC, BOR") }); //done
console.log({
  two: findRoutes([
    ["UAE", "NGR"],
    ["JPN", "PHL"],
    ["BRA", "FRA"],
    ["PHL", "BRA"],
    ["FRA", "ENG"],
    ["NGR", "JPN"]
  ])
}); // done
// console.log({
// three: findRoutes(["USA, BRA, UAE, JPN, PHL, BRA, FRA, PHL, USA"])
// }); // done
console.log({
  four: findRoutes([
    ["Chicago", "Winnipeg"],
    ["Halifax", "Montreal"],
    ["Montreal", "Toronto"],
    ["Toronto", "Chicago"],
    ["Winnipeg", "Seattle"]
  ])
}); // done
// console.log({ four: findRoutes("MNL TAG CEB TAC BOR MNL CEB NGR") });  // done
// console.log({ five: findRoutes(["MNL TAG CEB TAC BOR MNL CEB NGR"]) });  // done
// console.log({ six: findRoutes('Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle') });  // done
// console.log(findRoutes('MNL, TAG, CEB, TAC, TAG, CEB, TAC, BOR'));   // probably done

// findRoutes(["USA, BRA, UAE, JPN, PHL, BRA, PHL, USA"]);

// findRoutes([["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"]]);

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

// function findRoutes(routes) {
//   //   if (routes.length === 1 && (typeof routes)==='object') {
//   //     return routes.join(" ")
//   //   }
//   if (typeof routes === "string") {
//     let strArr = routes.split(", ");
//     // if (strArr.length > 1) {
//       let strSet = new Set(strArr);
//       strArr = [...strSet];
//       return strArr.join(", ");
//     // } else {
//     //   strArr = strArr.join(" ");
//     //   strArr = strArr.split(" ")
//     //   return strArr.join(", ");
//     // }
//   }
//   let flat = routes.reduce((acc, val) => acc.concat(val), []).join(" ");
//   return routes
//   let flatArr = flat.split(" ");
//   let map = {};
//   let result = [];
//   let lastSeen = {};
//   flatArr.forEach((route, index) => {
//     map[index] = route;
//     lastSeen[route] = index;
//   });
//   result.push(map[0]);
//   result.push(map[1]);
//   let search = map[1];
//   const len = Object.keys(lastSeen).length;
//   for (let i = 1; i < len; i++) {
//     // Even
//     if (lastSeen[search] && !(lastSeen[search] % 2)) {
//       result.push(map[lastSeen[search] + 1]);
//       search = result[result.length - 1];
//       //  Odd
//     } else if (lastSeen[search] % 2) {
//       for (let key in map) {
//         if (
//           map[key] == search &&
//           !(key % 2) &&
//           map[key * 1 + 1] !== undefined
//         ) {
//           result.push(map[key * 1 + 1]);
//           search = map[key * 1 + 1];
//           break;
//         }
//       }
//     }
//   }
//   return result.join(", ");
// }
// // console.log(findRoutes("MNL, TAG, CEB, TAC, TAG, CEB, TAC, BOR")); //done
// console.log(findRoutes([["UAE", "NGR"],["JPN", "PHL"],["BRA", "FRA"],["PHL", "BRA"], ["FRA", "ENG"], ["NGR", "JPN"]]));  // done

const { performance } = require("perf_hooks");
function findRoutes(routes) {
  let flat = routes.reduce((acc, val) => acc.concat(val), []),
    map = {},
    result = [],
    lastSeen = {},
    app = {},
    search = "";
  flat.forEach((route, index) => {
    map[index] = route;
    lastSeen[route] = index;
    if (app[route]) {
      app[route] = app[route] + 1;
    } else {
      app[route] = 1;
    }
  });
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

function findRoute(routes) {
  if (routes.length > 1) {
    var currentstop = currentLocation(routes);
    let remainingRoutes = routes.filter(route => {
      return !(route[0] == currentstop);
    });
    return currentstop + ", " + findRoutes(remainingRoutes);
  } else {
    return routes[0][0] + ", " + routes[0][1];
  }
}

function currentLocation(routes) {
  let stops = routes.map(route => {
    return route[1];
  });
  return routes.filter(route => {
    return !stops.includes(route[0]);
  })[0][0];
}

function findRout(routes) {
  var r1 = routes.map(x => x[0]),
    r2 = routes.map(x => x[1]),
    r = {},
    start = r1.filter(x => !r2.includes(x))[0],
    rs = [start];
  routes.forEach(x => (r[x[0]] = x[1]));
  while (rs.length <= routes.length) rs.push((start = r[start]));
  return rs.join(", ");
}
// console.log({
//   two: findRoutes([
//     ["UAE", "NGR"],
//     ["JPN", "PHL"],
//     ["BRA", "FRA"],
//     ["PHL", "BRA"],
//     ["FRA", "ENG"],
//     ["NGR", "JPN"]
//   ])
// }); // done
let t0 = performance.now();
console.log({
  four: findRoutes([
    ["Chicago", "Winnipeg"],
    ["Halifax", "Montreal"],
    ["Montreal", "Toronto"],
    ["Toronto", "Chicago"],
    ["Winnipeg", "Seattle"]
  ])
}); // done
let t1 = performance.now();
console.log("Call to findroutes took " + (t1 - t0) + " milliseconds.");
let a0 = performance.now();
console.log({
  four: findRoute([
    ["Chicago", "Winnipeg"],
    ["Halifax", "Montreal"],
    ["Montreal", "Toronto"],
    ["Toronto", "Chicago"],
    ["Winnipeg", "Seattle"]
  ])
}); // done
let a1 = performance.now();
console.log("Call to findroute took " + (a1 - a0) + " milliseconds.");
let w0 = performance.now();
console.log({
  four: findRout([
    ["Chicago", "Winnipeg"],
    ["Halifax", "Montreal"],
    ["Montreal", "Toronto"],
    ["Toronto", "Chicago"],
    ["Winnipeg", "Seattle"]
  ])
}); // done
let w1 = performance.now();
console.log("Call to findroute took " + (w1 - w0) + " milliseconds.");

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

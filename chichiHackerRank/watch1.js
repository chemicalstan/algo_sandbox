function numPlayers(k, scores) {
  const sortScore = scores.sort((a, b) => {
    return b - a;
  });
  let result = 0;
  let arrr = [];
  let last = "start";
  let pos = 0;
  let count = 1;
  //   sortScore.forEach((num) => {

  for (let i = 0; i < sortScore.length; i++) {
    if (arrr.length === 0) {
      pos = 1;
      arrr.push(pos);
      last = sortScore[i];
      result++;
      if (pos > k) {
        break;
      }
    } else {
      if (sortScore[i] === last) {
        arrr.push(pos);
        count++;
        result++;
      } else {
        pos = pos + count;
        if (pos > k) {
          break;
        }
        count = 1;
        arrr.push(pos);
        last = sortScore[i];
        result++;
      }
    }
  }

  //   });
  //   for (let i = 0; i < arrr.length; i++) {
  //     if (arrr[i] <= k) {
  //       result++;
  //     } else {
  //       break;
  //     }
  //   }
  console.log(result);

  //   arrr.forEach(rank => {
  //     if(rank<=k){
  //     result++
  //     }else{
  //         return
  //     }
  //   });
  // const rank = new Set(scores)
  // let rankArr = [...rank]
  // let map1 = {}
  // let arrr = []
  //   let result = 0;
  // rankArr.forEach((r, i)=>{
  //     map1[r] = i+1
  // });
  //   const sortScore = scores.sort((a, b) => {
  //     return b - a;
  //   });
  //   sortScore.forEach(score => {
  //     // if(map1[score]<=k){
  //     arrr.push(map1[score]);
  //     // result++
  //     // }
  //   });
  //   console.log(arrr);
}

numPlayers(3, [100, 50, 50, 20]);

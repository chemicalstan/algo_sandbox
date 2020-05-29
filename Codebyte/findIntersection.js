// function FindIntersection(strArr) { 
//     // return strArr.length
//     if(strArr.length<2){
//       return false;
//     }
//     let str1 = strArr[0];
//     let split1 = str1.split(",");
//     let map1 = {};
//     let result = [];
    
//     for(let i=0; i<split1.length; i++){
//         map1[JSON.parse(split1[i])] = true;
//     }
//     let str2 = strArr[1];
//     let split2 = str2.split(",");
//     let map2 = [];
//     for(let j=0; j<split2.length; j++){
//         map2.push(JSON.parse(split2[j]));
//     }

//     for(let k=0; k<map2.length; k++){
//         if(map1[map2[k]]){
//             result.push(map2[k]);
//         }
//     }
//     if(result.length>0){
//       return result.join();
//     }else{
//       return false;
//     }
  
//   }
  
  input = ["4, 5", "1, 2, 4, 13, 15"];
  // keep this function call here 
//   console.log(FindIntersection(input));

  function FindIntersection(input) { 
  
    const [firstList, secondList] = input.map( s => s.split(", ") );
    
    const resultMap = {};
    const result = [];
    
    // for ( const number of firstList ) {
    //   resultMap[ number ] = true;
    // }
    firstList.forEach(num=>{
        resultMap[num] = true;
    })

    for ( const number of secondList ) {
      if ( resultMap[number] ) {
        result.push( number );
      }
    }
    
    return result.length ? result.join(",") : false;  
  }
     
  // keep this function call here 
  console.log(FindIntersection(input));
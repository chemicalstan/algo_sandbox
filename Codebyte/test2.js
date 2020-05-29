function QuestionsMarks(str) { 
    let arr = [];
    for(let i=0; i<str.length; i++){
      if(!isNaN(str[i])||str[i]=='?'){
        arr.push(str[i])
      }
    }
    // return arr
    let count = 0;
    let countT = 0;
    let temp = 0;
    let result = false;
    arr.forEach((x)=>{
        // base case
        if(temp === 10 && count === 3){
            return result = true;
        }
        if(!isNaN(x)){
            temp = temp + parseInt(x);
            countT++;
        }
        if(x === '?' && countT>=1){
            count++
        }
        if(count>3){
            count = 0;
        }
        if(countT === 2){
            countT = 0;
            // count = 0
        }
        console.log(temp, count, countT);
        
        // console.log(x)
    })
    // code goes here  
    return result; 
  
  }
  const input = "acc?7??sss?3rr1??????5";
  console.log(QuestionsMarks(input));
// console.log(parseInt("5")+4)


// // Solutions
// function QuestionsMarks(str) {
//     let numPlaces = [];
//     //presumption of false, until flag is turned true
//     let flag = false;
  
//       //get an array of places in string holding integers
//     for (let i = 0, len = str.length; i < len; i++) {
//       if (/\d/.test(str[i])) {
//         numPlaces.push(i);
//       }
//     }
  
//     let numCount = numPlaces.length;
  
//     for (let i = 0; i < numCount - 1; i++) {
//       if (parseInt(str[numPlaces[i]], 10) + parseInt(str[numPlaces[i + 1]], 10) === 10) {
//         flag = true;
//         let strSeg = str.slice(numPlaces[i], numPlaces[i + 1]);
  
//         strSeg = strSeg.replace(/[^\?]/g, '');
//         if (strSeg !== '???') {
//           return false;
//         }
//       }
//     }
//     return flag;
//   }
     
//   // keep this function call here 
//   QuestionsMarks(readline());


// function QuestionsMarks(str) { 
//     // take all patterns of letters and ?s in between two digits
//     var matches = str.match(/\d[\w\?]*?\d/g);
//     if (!matches) return false;
    
//     var result = false;
    
//     for (var match of matches) {
//         if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
//             // count the numbers of ?'s in the substring between two numbers 
//             if (match.split('').filter(char => char === '?').length === 3) {
//                 result = true;
//             } else {
//                 return false;
//             }
//         }
//     }
//     return result;
// }
   
// // keep this function call here 
// QuestionsMarks(readline());
  
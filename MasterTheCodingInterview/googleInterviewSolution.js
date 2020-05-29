// // Question :: Create a function which check if the sum of any pair of 
// //numbers in any given array amounts to a given number (sum). and return true or false

// ///*** SOLUTIONS */

const arr1 = [1,3,4,7,4];
const sum = 8;
// // first solution
// const comparePairs = (arr, sum)=>{
//     var len = arr.length;
//     var count  = 1;
//     let map = {}
//     let response = false;
//     for (let i = 0; i < len-1; i++) {
//         for(let j = i+1; j<len; j++){
//             if(arr[i]+arr[j] === sum){
//                 response = true;
//                 map[`pair ${count}`] = [arr[i], arr[j]];
//                 count++;
//             }
//         }
//     }
//     return ({
//         response,
//         map
//     });
// }
// //  Very poor Big O
// // time complexity = O(N^2)
// // space complexity = O(N)
// console.log(comparePairs(arr1, sum));

// A more efficient method
const comparePairs2  = (arr, sum)=>{
   let store = {};
   const len = arr.length;
   for (let i = 0; i < len; i++) {
       let item = arr[i];
       let element = sum - item;
       if (store[element]) {
           return { bool: true, elements: [element, item]};
       }else{
           store[item] = true;
       }
   }
   return {
       store: store,
       result: false
    };
}

console.log(comparePairs2(arr1, sum));
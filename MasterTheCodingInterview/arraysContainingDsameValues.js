array1 = ['a','b','c'];
array2 = [1, 2, 'x'];
array3 = ['z','y','a']
/// *****  BAD BIG O
// const checkArrays = (array1, array2) => {
//     let response = '';
//     array1.forEach(element1 => {
//         array2.forEach(element2 =>{
//             if (element1 === element2) {
//                 response = true;
//             }
//         });
//     });
//     if (response === true) {
//         return response;
//     }else{
//         return false;
//     }
// }
// Time complexity = O(a * b)
// Space complexity = O(n)

////**** GOOD PRACTICE */

// const checkArrays = (arr1, arr2)=>{
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }        
//     }
//     return false;
// }
// Time complexity = O(a * b)
// Space complexity = Nil

////****BEST PRACTICE */

// First create and object that indicates the status of the elements in the first array
// Compare the first array with the object 

const checkArrays = (arr1, arr2)=>{
    let map = {};
    for (let i=0; i<arr1.length; i++){
        // check if map already contains that element from array
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // a second loop that compares the array and object
    for (let j=0; j<arr2.length; j++){
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

// time complexity = O(a + b)
// space complexity = 0(a)

// Best javascript practice
const checkArrays2 = (arr1, arr2)=>{
    return arr1.some(item => arr2.includes(item))
}
console.log(checkArrays2(array1, array3));
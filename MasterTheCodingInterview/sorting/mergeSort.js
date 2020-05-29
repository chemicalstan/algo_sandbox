// ABOUT:: Here, sorting is done using the 
// divide and conquer method and then rearranged
// accordingly in the process of merging

const array = [99, 44, 6, 2, 1,5,63,87,283,0,4]

const mergeSort = array=>{

    debugger
    // Base case
    if (array.length === 1) {
        return array;
    }
    // Split array into right and left
    let length = array.length;
    let middle = Math.floor(length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right){
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++
        }else{
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
 
const answer = mergeSort(array);
console.log(answer)

// let halfLength = Math.ceil(array.length/2);
// let lhs = array.slice(0, halfLength);
// let rhs = array.slice(halfLength);
// console.log(lhs)
// console.log(rhs)


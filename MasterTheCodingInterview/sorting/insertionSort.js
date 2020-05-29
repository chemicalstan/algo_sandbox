// ABOUT:: here, as i increases in the loop, the 
// array is sorted in an increasing order
// Space complexity of o(n)

const input = [1, 5, 23, 8, 0, 3, 11, 2];
const array = [99, 44, 6, 2, 1,5,63,87,283,0,4]

const insertionSort = array=>{

    const length = array.length;
    // debugger
    for(let i=0; i<length; i++){
        // move number to the first position
        if(array[i]<array[0]){
            //slice returns an array of the numbers that
            //are deleted from the array at index of i
            array.unshift(array.splice(i,1)[0])

            // here unshift adds a num at the beginning of
            // the array
        }else{
            //find where number should go
            for(let j=1; j<i; j++){
                if(array[i]>array[j-1] && array[i]<array[j]){
                    // move num to the right spot
                    array.splice(j,0, array.splice(i,1)[0]);
                }
            }
        }
    }
}

console.log(insertionSort(input));
// console.log(input.unshift(0));
console.log(input.splice(2,2));
console.log(input);
console.log(array);

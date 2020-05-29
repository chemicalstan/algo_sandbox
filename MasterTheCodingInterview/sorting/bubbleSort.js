// ABOUT:: here, the biggest numbers are bubbled
// to the end of the array . this is repeated until
// array is sorted

const input = [1, 5, 6, 3, 6, 8, 0, 3];

const bubbleSort = input => {
    const length = input.length;
    for(let i = 0; i<length; i++){
        for(let j = 0; j<length; j++){
            if(input[j]>input[j+1]){
                let temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }
    return input
}
console.log(bubbleSort(input));
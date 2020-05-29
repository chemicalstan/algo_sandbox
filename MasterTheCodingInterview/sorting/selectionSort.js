// ABOUT:: Here the first is compare with the rest
// in search for the smallest which is then placed at
// the first index, this is continued until the array 
//becomes sorted
const input = [1, 5, 23, 8, 0, 3, 11, 2];

const selectionSort = input=>{
   const length = input.length
   debugger
   for(let i=0; i<length; i++){
    let smallest = i;
    let temp = input[i];
       for(let j=i+1; j<length; j++){
            if(input[j]<input[smallest]){
                smallest = j;
            }
       }
       input[i] = input[smallest];
       input[smallest] = temp
   }
   return input;
}

console.log(selectionSort(input));
const returnFirstDuplicate = arr => {
    const map = {};
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]]){
            console.log(map)
            return `the first duplicate value is ${arr[i]}`;
        }
        map[arr[i]]= true;
    }
    return undefined;
}
const arr = [1,2,4,3];
console.log(returnFirstDuplicate(arr));
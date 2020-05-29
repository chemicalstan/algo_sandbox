function Solution (input){
    input.sort((a, b)=>{
        return a-b;
    });
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        if(input.includes(-input[i])){
            result = Math.abs(input[i]);
            return result;
        }
    }
    return result;
}
const input = [9, 3,4,5,2,-5,-2]; 
console.log(Solution(input));
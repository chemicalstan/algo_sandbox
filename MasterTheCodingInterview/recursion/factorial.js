// function findFactorialRecursive(number, answer){
//     // debugger
//     let ans = answer
//     if (!answer) {
//         ans = number
//     }
//     if(number <= 2){
//         return answer
//     }
//     ans = ans * (number-1)
//     number--;
//     if(number === 2){
//         return ans
//     }
//     return findFactorialRecursive(number, ans);
// } // Method not too good enough

function findFactorialRecursive(number){
    if (number === 2) {
        return number;
    }
    return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number){
    debugger
    let answer = number;
    if(number<=2){
        return answer
    }else{
        for(i = 1; i<number; number--){
            answer =  answer * (number-i)
            // number--;
        }
        return answer;
    }
}

console.log(findFactorialRecursive(5))
// console.log(findFactorialIterative(4))


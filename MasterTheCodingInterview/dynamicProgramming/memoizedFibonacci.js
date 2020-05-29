// Given a number N, Return the index value of the 
// Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144....
// the pattern of the sequence is that each value is the
// sum of the 2 previous values, that means the for N=5 -> 2+3

// slow O(2^n)
// O(1) space
function fibonacciRecursive (n){
    // debugger
    if (n<2) {
        return n;
    }
    cache[n] = fibonacciRecursive(n-1)+fibonacciRecursive(n-2);
    return cache[n]
}

// fast O(n) time
// O(n)  space
function memoizedFibonacci (){
    let cache = {}
    return function iterate(n){
        // check cache
        if (n in cache) {
            return cache[n];
        }else{
            // debugger
            //  base case
            if (n<2) {
                return n
            }
            cache[n] = iterate(n-1) + iterate(n-2);
            return cache[n]
        }   
    }
}

let fibonacci = memoizedFibonacci()
console.log(fibonacci(100))
// First method
//Global scope cache
// let cache = {}
// function sumOf80(n){
//     if(n in cache){
//         return cache[n];
//     }else{
//         console.log('Long time');
//         cache[n] = n + 80;
//         return cache[n];
//     }   
// }

//  Second method
//  Local scope cache
function sumOf80 (){
    let cache = {}
    return  n => {
        if (n in cache) {
            return cache[n];
        }else{
            console.log('long time')
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

let test = sumOf80();


console.log(test.cache)
console.log(test(5))
// console.log(sumOf80(5))

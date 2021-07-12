
function missingHighest(A) {
    let map = {}
    A.forEach(element => {
        map[element] = true
    });
    let result = 1
    for(let num in map){
        if (!map[+num+1] && +num+1>result) {
            result = +num+1
            break;
        }
    }
    console.log(result)
}
missingHighest([1, 3, 6, 4, 1, 2])


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (typeof A === String) {
        return NaN;
    }
    if (typeof A === "number") {
        const a = []
        a.push(A)
        const uVal = [...new Set(a)];
    }else{
        const uVal = [...new Set(A)];
    }
    // console.log(parseInt(uVal))
    // console.log(-1<1)
    const sort = uVal.sort((x, y)=>{
        return x-y;
    })
    // console.log(sort)
    let element = [];
    let map = {}
    let result = '';
    for (let i = 0; i < sort.length; i++) {
        if (sort[i+1] !== sort[i]+1) {
            if (sort[i]+1 <= 0) {
                element.push(1);
            }else{
                element.push(sort[i]+1);
            }
        }
        map[sort[i]] = true;
    }
    if(element[0]<=0){
        element[0] = 1
    }
    for (let j = 0; j < element.length; j++) {
        if (map[element[j]] === true) {
            element.splice(j, 1);
        }
        
    }
    console.log(element[0]);

}

// solution([1, 3, 6, 4, 1, 2])
solution(2)
// solution([1, 2, 3])
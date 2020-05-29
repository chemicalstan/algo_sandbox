// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {

    const addBinary = (dec)=>{
        return (dec >>> 0).toString(2);
    }
    const a = /0{1,}1+/g;
    const binary = addBinary(N);
    let high = 0;
    // return binary
    while((result=a.exec(binary))!==null){

        let arr = result[0].split("");
        let newArr = [];
        // return arr
        arr.forEach(element => {
            if(element === '0'){
                newArr.push(element);
            }
        });
        if(result[0].length>high && result[0].length>1){
            high = newArr.length;
        }
    }
    return high;
    // write your code in JavaScript (Node.js 8.9.4)
}

function addBinary(dec){
    return (dec >>> 0).toString(2);
}


// console.log(addBinary(1041));
console.log(solution(1041));

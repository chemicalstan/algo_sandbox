let input = ["X:-1", "Y:1", "X:-4", "B:3", "X:5"];

function returnAns (input){
    let map = {};
    let output = [];
    let key;
    let value;
    for(let i = 0; i<input.length; i++){
        let split = input[i].split(':');
        key = split[0];
        value = JSON.parse(split[1]);
        // return ;
        if(map[key]){
            map[key] = map[key]+value;
        }else{
            map[key] = value;
        }
    }
    // return map.length
    for(let x in map){
        if(map[x] !== 0){
            output.push(` ${x}:${map[x]}`);
        }
    }
    return output.sort().join()
}
const result = returnAns(input);
console.log(result);

// function GroupTotals(strArr){
//     if(strArr.length === 0) return
//     const map = strArr.reduce((acc, value)=> {
//         const [key, val] = value.split(":");
//         if(acc[key]){
//             acc[key]= acc[key]+ parseInt(val, 10);
//             return acc
//         }
//         acc[key] = parseInt(val, 10)
//         return acc;
//     }, {})

//     const result = []
//     for(const prop in map){
//         if(map[prop] === 0) continue
//         result.push(` ${prop}: ${map[prop]}`)
//     }
//     return result.sort().join();
// }


// console.log(GroupTotals(input));

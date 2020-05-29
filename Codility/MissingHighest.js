function missingHigest(arr){
    arr.sort((a, b)=>{
        return a-b;
    });
    map = {};
    let result = 1;
    arr.forEach(num=>{
        map[num]=true;
    })
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>=result){
            if (!map[arr[i]+1]) {
                result = arr[i]+1;
                return result;
            }
        }
    }
    return result
}

let input = [3, 55, 6, 12, 4, 66];



console.log(missingHigest(input));

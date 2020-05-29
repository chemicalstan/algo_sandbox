function Solution (a, b){
    if(a.length < 1 || b.length<1){
        return 0;
    }
    let cache = {},
        calc = '',
        result = [];
    for (let i = 0; i < a.length; i++) {
        calc = a[i]/b[i];
        if(cache[calc]){
            // increase count if fraction already exists
            cache[calc] = cache[calc]+1;
        }else{
            // initialise new count if fraction doesn't exist
            cache[calc] = 1;
        }
    }
    // convert obj to Array
    for(x in cache){
        result.push(cache[x]);
    }
    // sort the Array
    result.sort((a,b)=>{
        return a-b;
    });
    // get the last value which is the highest
    return result[result.length-1];
}


const a = [4,4,7,1,2],
      b = [4,4,8,1,2];
    
      
console.log(Solution(a, b));
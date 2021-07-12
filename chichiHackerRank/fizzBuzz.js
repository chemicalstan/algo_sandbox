function fizzBuzz(n) {
    let count = 1
    let nArr = []
    while(count<=n){
        nArr.push(count)
        count++;
    }
    const result = []
    nArr.forEach((num, i) => {
        result.push(num)
        if (!(num%3)) {
            result.splice(i, 1, "Fizz")
        }
        if (!(num%5)) {
            if (result[i] === "Fizz") {
                result.splice(i, 1, "FizzBuzz")
            }else{
                result.splice(i, 1, "Buzz");
            }
        } 
        console.log(result[i])
    });
}

fizzBuzz(15)
function printFirstAndSecondNumberSum(numbers){
    numbers.forEach(firstNum => {
        numbers.forEach(secondNum => {
            console.log(firstNum + secondNum);
        })
    });
}

printFirstAndSecondNumberSum([1,2,3,4,5,6]);

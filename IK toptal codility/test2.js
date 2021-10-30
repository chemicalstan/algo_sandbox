function solution(S, C) {
    const arr1 = S.split("\n")
    const arr2 = arr1[0].split(",")
    const index = arr2.indexOf(C)
    result = +arr1[1].split(",")[index]
    for (let i = 2; i < arr1.length; i++) {
        if (+arr1[i].split(",")[index]>result) {
            result = +arr1[i].split(",")[index]
        }
    }
    console.log(result)
}

solution('city,temp2,temp\nParis,7,-3\nDubai,4,-4\nPorto,-1,-2', 'temp');
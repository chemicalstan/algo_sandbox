function solution(A) {
    let rel = 0;
    let temp1 = 0;
    // get temp
    loop1: for (let i = 0; i < A.length; i++) {
        if (!(A[i]<0)) {
            temp1 = A[i]
            break loop1
        }else{
            A.push(A.splice(i, 1)[0])
            rel++
            i = -1
        }
    }
    let temp2 = temp1
    loop2: for (let i = 0; i < A.length; i++) {
        if (!(i+1)) {
            break loop2
        }
        y = i+1
        temp2 = temp2+A[y];
        if (temp2<0) {
            A.push(A.splice(i, 1)[0])
            rel++
            temp2 = temp1
            i = -1
        }
    }
    console.log(rel)

}


solution([-1, -1, -1, 1, 1, 1, 1])
function solution(S) {
    let result = []
    loop1: for (let a = 0; a < S.length; a++) {
        loop2: for (let i = 0; i < S[a].length; i++) {
            loop3: for (let j = a+1; j < S.length; j++) {
                if(S[a][i]===S[j][i]){
                    result.push(a, j, i);
                    break loop1;
                }
            }
        }
    }
    console.log(result)
}
// solution(["abc", "bca", "dbe"])
solution(["zzzz", "ferz", "zdsr", "fgtd"]);
// solution(["gr", "sd", "rg"])
// console.log(solution(["abc", "bca", "dbe"]))
// console.log("abc".indexOf("c"))

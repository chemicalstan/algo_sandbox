function SwapII(input){
    const a = /[0-9]{1,}[A-z]{1,}[0-9]{1,}/g,
          b = /[0-9]+/,
          c = /[0-9]+$/,
          d = /[A-z]+/,
          e = /([a-z]+)|([A-Z]+)/g;
    let inputArr = input.split("");
    let result, res;
    while((result=a.exec(input))!==null){
        let temp1,temp2, temp3;
        if((res=b.exec(result[0])) !== null){
            temp1 = res[0];
        }
        if((res=d.exec(result[0])) !== null){
            temp2 = res[0];
        }
        if((res=c.exec(result[0])) !== null){
            temp3 = res[0];
        }

        let ans = temp3+temp2+temp1;

        for(let i=0; i<result[0].length; i++){
            inputArr.splice(result.index, 1, ans[i]);
            result.index++;
        }
    }
    return inputArr.join("").replace(e, (match, chr)=>{
        return chr?match.toUpperCase():match.toLowerCase();
    })
}
const input = "48hELLO67 -8wORLD, 8899yeS32"
console.log(SwapII(input));
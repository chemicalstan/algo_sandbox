function LetterChanges(str) { 
    const vowel = /a|e|i|o|u/g;
    // console.log(vowel.test(''));
    const arr = str.split("");
    let cache = {}
    let result = [];
    const alpha='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    for (let i = 0; i < alpha.length; i++) {
        if (alpha[i]==="z") {
            cache[alpha[i]] = 'a';
        }else if(alpha[i]==="Z"){
            cache[alpha[i]] = 'A';
        }else if(vowel.test(alpha[i+1])){
            cache[alpha[i]] = alpha[i+1].toUpperCase();
        }else{
            cache[alpha[i]] = alpha[i+1];
        }
    }
    arr.forEach(element => {
        if(cache[element]){
            result.push(cache[element]);
        }else{
            result.push(element);
        }
    });
    return result.join(""); 
}
  
  const input= "hello*3";
  console.log(LetterChanges(input))
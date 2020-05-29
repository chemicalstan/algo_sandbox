const alphabets = ['m', 'ć', 'e', 'u', 'g', 'c', 'ã'];
const numbers = [3, 55, 6, 12, 4, 66];

console.log(alphabets.sort((a, b)=>{
    return a.localeCompare(b)
}));

console.log(numbers.sort((a, b)=>{
    return a-b;
}));
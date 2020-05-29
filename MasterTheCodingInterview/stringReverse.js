// Question:: Create a function that reverses a string
// example:: 'This is Stanley' to 'yelnatS si sihT'.

// method one
const Reverse = str=>{
    const strArr = str.split('');
    let backward = [];
    let len = strArr.length;
    count = 1;

    for(let j=0; j<len; j++){
        backward[j] = strArr[len-count];
        count++;
    }

    return backward.join('');
}

// method two
const Reverse2 = str =>{
    let backward = [];
    let len = str.length;

    for(let j=len; j>=0; j--){
        backward.push(str[j]);
    }

    return backward.join('');
}

// method three
const Reverse3 = str => [...str].reverse().join('');

const name = "This is Stanley";
// const split = name.split('');
// split[0] = name[name.length-1];
console.log(Reverse3(name));

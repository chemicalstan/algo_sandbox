// const large = new Array(100).fill('nemo');
const names = ['abel', 'nemo', 'sam', 'nemo'];

function findNemo(array){
    const t0 = performance.now();
    for(i = 0; i<array.length; i++){
        if (array[i] === 'nemo') {
            console.log(`found ${array[i]}`);
        }
    }
    const t1 = performance.now();
    console.log(`the runtime is ${t1 - t0}`);
}

findNemo(names);
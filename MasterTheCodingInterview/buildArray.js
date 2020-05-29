class MyArray {
    constructor (){
        this.length = 0;
        this.data = {};
    }

    get (index){
        return this.data[index];
    }

    push (input){
        this.data[this.length] = input;
        this.length++;
        return this.length;
    }

    pop (){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete (index){
        if (index < this.length) {
            const item = this.data[index]
            delete this.data[index];
            this.shiftIndex(index);
            // return {data: this.data, index};
        }
    }

    shiftIndex (index){
        for (let i = index; i<this.length-1; i++){
            this.data[i] = this.data[index+1];
            // this.length--; 
        }
        this.pop();
    }
}

const newArray = new MyArray();
newArray.push('my guy');
newArray.push('jakpa');
newArray.push('seven');
// newArray.pop();
newArray.delete(1)
console.log(newArray.data);
// console.log(newArray.delete(1));

// const test = {};
// test[1] = 'oga';
// test[2] = 'madam'
// console.log(test);
// test[1] = test[2];
// console.log(test);

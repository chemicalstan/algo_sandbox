class Node {
    constructor (){
        this.value = null,
        this.next = null
    }
};

class Stack {
    constructor (){
        this.top = null,
        this.bottom = null,
        this.length = 0
    }

    // to view the last added item
    peek (){
        return this.top;
    }
    // to add to the top of the stack 
    push (value){
        if(!value){
            return 'Please enter a value';
        }
        const newNode = new Node();
        newNode.value = value
        // validation
        if(!this.top){
            this.top = newNode;
            this.bottom = this.top;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++
        // return this.top

    }
    // the remove the latest item from the top of the stack 
    pop (){
        const top = this.top;
        
        if(top){
            const next = top.next;
            this.top = next;
            this.length--;
        }
        if (this.length === 0) {
            this.bottom = null;
        }
    }
}
class StackArr {
    constructor (){
        this.top = null;
        this.stack = [];
        this.length = 0;
    }

    peek (){
        return this.top = this.stack[this.length-1];
    }

    push (value){
        if (!value) {
            return 'please input value!'
        }
        this.stack.push(value);
        this.length++
        this.top = this.stack[this.length-1];
    }

    pop (){
        this.stack.pop();
        this.length--;
        this.top = this.stack[this.length-1];
    }
}


// const myStack = new Stack();
// console.log(myStack.push('google'))
// console.log(myStack.push('Udemy'))
// console.log(myStack.push('Stack Overflow'))
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack)
const myStackArr = new StackArr();
console.log(myStackArr.push('Google'))
console.log(myStackArr.push('Udemy'))
console.log(myStackArr.push('Twitter'))
console.log(myStackArr.pop())
console.log(myStackArr.pop())
console.log(myStackArr.pop())
console.log(myStackArr.pop())


console.log(myStackArr.peek())

console.log(myStackArr)

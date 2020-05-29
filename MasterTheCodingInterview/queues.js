class Node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

class Queues {
    constructor (){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek (){
        if (this.first) {
            return this.first.value;
        }
    }
    enqueue (value){
        if (!value) {
            return "Please input a value";
        }
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue (){
        if (this.first) {
            const holdingPointer = this.first;
            this.first = this.first.next;
            this.length--;
        }
        if (!this.first) {
            this.last = null;
        }
    }
}

const myQueue = new Queues;
myQueue.enqueue('Isreal');
console.log(myQueue.enqueue('Stanley'))
console.log(myQueue.enqueue('Alhassan'))
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
// console.log(myQueue.dequeue())
console.log(myQueue.peek())
console.log(myQueue)
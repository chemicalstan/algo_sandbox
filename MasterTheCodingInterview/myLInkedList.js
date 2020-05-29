class LinkedList {
    constructor(value){
        // Linked list head
        this.head = {
            value: value,
            next: null
        };
        // linkedList tail 
        this.tail = this.head;
        // linkedList length
        this.length = 1;

    };

    append (value){
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };

    prepend (value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    };

    insert(index, value){
        // Validation
        if(index >= this.length){
            this.append(value);
        }else if(index === 0){
            this.prepend(value)
        }else if(index === undefined){
            return 'index is undefined';
        }else{
            const newNode = {
                value: value,
                next: null
            };
    
            const beforeIndex = this.traverseToHolder(index - 1);
            const currentIndex = beforeIndex.next;
            beforeIndex.next = newNode;
            newNode.next = currentIndex;
            this.length++;
            // return {before: beforeIndex};
        }
    };

    delete(index){
        if (index === undefined) {
            return 'index is undefined';
        }else if (index === 0){
            this.head = this.head.next;
            this.length--;
        }else if (index === this.length-1) {
            const beforeIndex = this.traverseToHolder(index-1);
            // const afterIndex = beforeIndex.next.next;
            beforeIndex.next = null;
            this.length--;
        //    return 'index is 6' 
        }else if (!(index >=this.length)) {
            const beforeIndex = this.traverseToHolder(index-1);
            const afterIndex = beforeIndex.next.next;
            beforeIndex.next = afterIndex;
            this.length--;
        }else{
            return `index is greather than ${this.length-1}`;
        }
        return index
    }

    traverseToHolder (index){
        let currentNode = this.head;

        let count = 0;
        while(count != index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    printList(){
        const list = [];
        // let count = 0;
        let currentNode = this.head;
        while(currentNode.next != null){
            list.push(currentNode.value);
            currentNode = currentNode.next;
            // count++
        }
        list.push(currentNode.value)
        return list
    };

    reverse(){
        let first = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
            this.head.next = null;
            this.head = first;
            return first;
    }

    
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.prepend(0);
// myLinkedList.prepend(-1);
// myLinkedList.prepend(-5);

// console.log(myLinkedList);
// myLinkedList.insert(1, -50);
console.log(myLinkedList.printList());
// console.log(myLinkedList.delete(7));
console.log(myLinkedList.reverse());



// // function to reverse the linked list
    // badReverse (){
    //     const getArray = this.printList();
    //     const len = getArray.length;
    //     let i = 2;
    //     let count = 1
    //     let newNode = {
    //         value: null,
    //         next: null
    //     };

    //     this.nhead = {
    //         value: getArray[len-1],
    //         next: null
    //     }

    //     this.ntail = this.nhead
    //     this.nlength = 1;
    //     while(count < len){
    //         newNode = {
    //             value: null,
    //             next: null
    //         };
    //         newNode.value = getArray[len-i]
    //         this.ntail.next = newNode;
    //         this.ntail = newNode;
    //         i++;
    //         count++;
    //         this.nlength++
    //     }

    //     return this.printNList();

    // } // O(n^2)

    // printNList(){
    //     const list = [];
    //     // let count = 0;
    //     let currentNode = this.nhead;
    //     while(currentNode.next != null){
    //         list.push(currentNode.value);
    //         currentNode = currentNode.next;
    //         // count++
    //     }
    //     list.push(currentNode.value)
    //     return list
    // };
// 10-->15-->19

// let linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 15,
//             next: {
//                 value: 19,
//                 next: null
//             }
//         }
//     }
// }

class FirstDoublyLinkedList {
    constructor (value){
        this.head= {
            value: value,
            next: null,
            prev: null
        };
        this.tail= this.head;
        this.length = 1;
    }
    append (value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend (value){
        const newNode =  {
            value: value,
            next: null,
            prev: null
        }

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert (index, value){
        // validation of index length
        if(index >= this.length){
            this.append(value);
        }else{
            // new node
            const newNode = {
                head: value,
                next: null,
                prev: null
            };

            // Holder:: this denotes the node before the index
            const holder = this.grabHolder(index-1);
            const oldPointer = holder.next;
            holder.next = newNode;
            newNode.next = oldPointer;
            newNode.prev = holder;
            oldPointer.prev = newNode;
            this.length ++;
            return this.head;

        }
    }
    delete (index){
        // validation
        // get holder or leader
        const leader = this.grabHolder(index-1);
        const newOccupantOfIndex = leader.next.next;
        leader.next = newOccupantOfIndex;
        newOccupantOfIndex.prev = leader;
    }
    grabHolder(index){
        let count = 0;

        let holder = this.head;
        
        while(count !== index){
            holder = holder.next
            count++;
        }; 

        return holder;
    }
    printList (){
        let values = [];
        let node = this.head;
        while(node){
            values.push(node.value);
            node = node.next;
        }
        return values
    }
}

const doublyLinkedList = new FirstDoublyLinkedList(10);
doublyLinkedList.append(15)
doublyLinkedList.append(20)
doublyLinkedList.append(25)
doublyLinkedList.prepend(1)
// console.log(linkedList.printList());
// linkedList.insert(5,100)
// console.log(linkedList.printList());


console.log(doublyLinkedList.insert(2,300));
console.log(doublyLinkedList.delete(2));
// linkedList.insert(5,35)
console.log(doublyLinkedList);

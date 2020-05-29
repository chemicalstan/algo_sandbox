class Node {
    constructor (value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor (){
        this.root = null;
        this.length = 0
    }
    insert (value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            this.length++;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    // move left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        this.length++;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else if(value === currentNode.value){
                    return 'Value already exists';
                }else{
                    // move right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        this.length++;
                        return this;
                    }else{
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
    lookup (value){
        let currentNode = this.root;
        
        while(currentNode){
            //check current node
            if(currentNode.value === value){
                return currentNode;
            }
            if(value<currentNode.value){
                // move left
                currentNode = currentNode.left;
            }else{
                // move right 
                currentNode = currentNode.right;
            }
        }
        return currentNode
    }
    remove (value){
        
        if (typeof value !== 'number') {
            return 'value must be an integer!!!';
        }
        if(!this.root){
            return 'Tree is empty';
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value<currentNode.value){
                //  move left
                parentNode = currentNode;
                currentNode = currentNode.left
            }else if(value>currentNode.value){
                //  move right
                parentNode = currentNode;
                currentNode = currentNode.right;
            }else if(value === currentNode.value){
                // value matches with current node
                // check if right is null
                if(currentNode.left && currentNode.right === null){
                    // use the immediate left
                    if(parentNode === null){
                        // root node removed 
                        this.root = currentNode.left;
                        this.length--;
                    }else{
                        // check where we're removing from
                        if(parentNode.right.value === value){
                            // removed from the right of parent node
                            parentNode.right = currentNode.left;
                            this.length--;
                            return parentNode
                        }else if(parentNode.left.value === value){ 
                            //  removed from the left of parent node
                            parentNode.left = currentNode.left;
                            this.length--;
                            return parentNode
                        }else{
                            // there's a problem somewhere
                            return "there's a problem somewhere!!"
                        }
                    }
                    return this
                }else if(currentNode.right){
                    // go right once then go left left till the last left
                    // return 'has right';
                    let successor = currentNode.right;
                    
                    if(successor.left){

                        let sucPar = currentNode;
                        // keep moving left
                        while(successor.left){
                            sucPar = successor;
                            successor = successor.left
                        }

                        sucPar.left = successor.right;
                        successor.left = currentNode.left;
                        successor.right = currentNode.right;

                        if(parentNode === null){
                            this.root = successor;
                            this.length--;
                            return this;
                        }
                        if (value < parentNode.value) {
                            parentNode.left = successor;
                            this.length--;
                        }else if (value>parentNode.value) {
                            parentNode.right = successor
                            this.length--;
                        }else{
                            return 'something went wrong' 
                        }
                        return this;
                    }else{
                        // replace current Node with nearest successor
                        // check where we're removing from
                        if(parentNode === null){
                            successor.left = currentNode.left;
                            this.root = successor;
                            this.length--;
                            return this;
                        }else if(parentNode.right){
                            if (parentNode.right.value === value) {
                                parentNode.right = successor;
                                // if the node to be removed has a left child
                                // attach it to the successor's left 
                                if (currentNode.left) {
                                    successor.left = currentNode.left;
                                }
                                this.length--;
                            }else if(parentNode.left.value === value){ 
                                parentNode.left = successor;
                                // if the node to be removed has a left child
                                // attach it to the successor's left 
                                if (currentNode.left) {
                                    successor.left = currentNode.left;
                                }
                                this.length--;
                                return parentNode
                            }else{
                                return "there's a problem somewhere!"
                            }
                            return parentNode
                        }else if(parentNode.left.value === value){ 
                            parentNode.left = successor;
                            // if the node to be removed has a left child
                            // attach it to the successor's left 
                            if (currentNode.left) {
                                successor.left = currentNode.left;
                            }
                            this.length--;
                            return parentNode
                        }else{
                            return "there's a problem somewhere!"
                        }
                    }
                }else{
                    // leaf node just remove
                    // check where we're removing from
                    if(parentNode.right.value === value){
                        parentNode.right = null;
                        this.length--;
                        return parentNode
                    }else if(parentNode.left.value === value){ 
                        parentNode.left = null;
                        this.length--;
                        return parentNode
                    }else{
                        return "there's a problem somewhere!"
                    }
                }
            }
        }
        return 'This value does not exist in the binary tree '
    }
}
        // 9
    // 4       20
// 1     6   15   170

const BST = new BinarySearchTree();
BST.insert(24);
BST.insert(10)
// BST.insert(97)
BST.insert(6)
BST.insert(17)
BST.insert(90)
BST.insert(99)
BST.insert(14)
BST.insert(15)
BST.insert(30)
BST.insert(91)
BST.insert(98)
BST.insert(100)
BST.insert(40)
BST.insert(33)
console.log(BST.insert(45))
// console.log(BST.lookup(4))
console.log(BST.remove(24))

// successor cannot have left
// successor right become its parent left

// currentNode left = successor left
// current node right = successor right
// parent node left or ryt = successor





// if(currentNode.right){
//     // move right then left left left
// }else if(currentNode.left){
//     // use the left
//     if(parentNode === null){
//         this.root = currentNode.left;
//     }else{
//         if(parentNode.right === value){
//             parentNode.right = currentNode.left;
//         }else{
//             parentNode.left = null;
//         }
//         parentNode.left
//     }
// }else{
//     //remove current node
//     // check for position of current node
//     // relative to the parent node
//     if(parentNode.right === value){
//         parentNode.right = null;
//     }else{ 
//         parentNode.left = null;
//     }
// }
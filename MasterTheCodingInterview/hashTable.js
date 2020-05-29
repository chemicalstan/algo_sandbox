
class HashTable {
    constructor (size){
        this.data = new Array(size);
    }

    _hash (key){
        let hash = 0;
        for(let i = 0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set (key, num){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
            this.data[address].push([key, num])
    }
    get (key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return  undefined;
    }

    keys (){
        const bucketList = this.data;
        let keys = []
        for(let i=0; i<bucketList.length; i++){
           if(bucketList[i]){
            keys.push(bucketList[i][0][0]);
           }
        }
        return keys;
    }
}

const myHashTable = new HashTable(50000000);
myHashTable.set ('jethro', 100);
myHashTable.set ('stanley', 100);
myHashTable.set ('uyf', 200);
console.log(myHashTable.keys());



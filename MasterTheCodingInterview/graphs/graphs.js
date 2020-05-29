
class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        if(!this.adjacentList[node]){
            this.adjacentList[node] = [];
            this.numberOfNodes++;
        }else{
            return "Node already exist. Add edge instead";
        }
        console.log(this.adjacentList);
    }
    addEdge(node1, node2){
        //undirected Graph
        const firstNode = this.adjacentList[node1];
        const secondNode = this.adjacentList[node2];
        // check if both Vertex exist
        if(firstNode && secondNode){
            let searchFirst = firstNode.find(num=> num === node2);
            let searchSecond = secondNode.find(num=> num === node1);
            if(!searchFirst){
                firstNode.push(node2);
            }
            if(!searchSecond){
                secondNode.push(node1);
            }
            return this.adjacentList
        }else{
            return 'One of the nodes does not exit';
        }
            // console.log(searchFirst)
    }
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for(let node of allNodes){
            let nodeConnections= this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
// console.log(myGraph.addVertex('0'));
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
console.log(myGraph.addEdge('3', '1'));
console.log(myGraph.addEdge('3', '1'));
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
myGraph.showConnections();

// const num = {
//     0: [1,2,5],
//     1: [0,3],
//     2: [0]
// }

// console.log(num[0].find((item)=>{
//     if(item === 5){
//         return true
//     }
// }))
// console.log(Array.find('1'))

function solution(R) {
    // let front = 
    let dir = {
        0: "front",
        1: "down",
        2: "back",
        3: "up"
    }
    let map = []
    R.forEach((element) => {
        map.push([...element])
    });
    let next = map[0][1]
    let count = 1;
    let arrCount = 0;
    for (let i = 0; i < map.length; i++) {
        while(next === "."){
            count++
            next = map[i]
        }
        arrCount = 0
    }
    console.log(map)
}

solution(['...X..', '....XX', '..X...'])



// ['....X..', 'X......', '.....X.', '.......']
// ['...X.', '.X..X', 'X...X', '..X..']
// ['.']

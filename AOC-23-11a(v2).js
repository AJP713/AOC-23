//AOC 2023  Day 11 Part 1

let rawEx = "...#......@.......#..@#.........@..........@......#...@.#........@.........#@..........@.......#..@#...#....."

let rawFull = ".....................#......#...................#...............#........................................#..................................@...........................................................#.............................................................#..................@.....................................................................#.........#......#...........#.............#...........................@.....................................................#.......................................#..............................................@......#.................................#..........................................................................................#........@....................#.........#.............................................................................#...............................@..#.........................................................#.............................................................................#.@........................................................................................#...........#..................#....................@........#....................................#........................#.........................................................#...........@..............................................................................#................................#............................@..................................................#............#............................................................................@.........................#......#........#................................................#..........................................#......@......#..............................................................................#...............#......................................@...................................................................#........................................................................@....................#...........................#............................................................#..............#.....#.........@..................................#....................#.........................................#......#..............................#....@.#..........................................................................................................................................@........#.....#........................#...........#.............#.....................#....................................................@..........................#.................................#.....................#.........................................................@.............................................................................................................................#.............#@...................................#......................................................#....................#............................@.....................#...................#............#..................#.............................................#...........#........@..............................................................................................#.............................................@....#..........#...............#..........................................................................#.................................@.............................................#..............................................................................................@...................................................................#..............#.................................#.......................@..................#........................................................#................................................................@..#.................................#...................#..............................#.........................................#.......#..@...............................................................#...............#.....................#..........#.........#.................@.........#......................#.............................................................#.............................................@..............#...............................#.............................................................................................@........................................#.................................#............................................................#....@..............................................................................................................#......#......#...............@.........................#..........#.............................................#........#................................................@....................................................................#.....................................#.................................@....#...............#........#...............................#........................#........................................#............@........................................................#...................................................................................@............................................#...........................#......................#.....#......................................@.........................................................................................#.............................................#....@...........#....................#..................................#.................................................#...........#..........@.#..........................................................................................................................................@................#........................#..........#.......................................................................................@........................#........................................................................................#..........................@........................................................................#.........#...................#...................#.................@........................................................#......................................................................#............@.....#.....................................................................................#................................................@...............#...................................#.................#..............................................................#.......@.........#..................#..................................#..................................................#.........................@......................................#.......#....................................#......................................................#.@..........................................................................................................#......................#..........@...#..............#.......................#.....................................................#...........................................@................................#...............................................#..........#................................................@..........................#......................#......................#...................................................................@..................................................................#................................#........................................@......................................................#.................................#.........................#...................#.....@..............#..........................#..................................................................................#...............@......#......................#.................................................................#...........#................................@.............................................................................#..............................................................@.......................#..........................#......................................................................#..........#.......@.#.................................#................................................................#....................................#..@........#......#................................................#...............................................#...........................@..........................................................................#.....#.........................#...........#.....#...............@............................#..............#..........#....................................#................................................@............................................................................................................................................@............#..........#....................................................................................................................@............................................................#.......................#..............#........................................@.....................................#...............................#...................................#..................................@.........#.....................................................................#.....................................#...............#.....#@#.............#.............................................................................................................................@......................................................#....................................#....................................#...........@...................................................................#............................................#...........................@............................................................................................................................................@....................#............................#................................................#......................................#..@.............................#...................................................#..........................................................@.........................................................................#...............#.................#................................@.............#.........#.........#.....#......................#............................................................#................@............................................................................................................................................@.............................................#..........#.....................#..................................#..........................@............................................................................................................................................@...................................#.............#................#.....#.....................................................#.............@....#.....................#..................................#..............................................................................@............................................................................................................................................@#.....................................#...................................................................................#.................@...............................................#......................#.....#...................................#...........................@.........#...................#.....................................................#.................#......................................@.......................#...............................#........................................#..............................#............@...#.....................................#..................................................................#...............................@...................................................#......................................#...........................................#.....@.................#..........................................................................................................................@...................................................................................................................#......#.................@.................................#..............#.....#......................#.................#.........#..................................@#....................................................................#........................................#...........................#.@............................................................................................................................................@.........................#..................................................................................................................@...............................#.......................................................................................#....................@..........#...................................#..................#.....................#....................#...............................@............................................................................#.....#.........................................................@....#............#............................................................................#.......#..........#..........................@..................................................................................................................................#.........@...................................#...........................................#............................................................@.............................#..........................#.................................#........#........................................@..............#....................................................#........................................#.............#...........#.....@...............................................#.............#.......................................................#......................@........#..............................................................#....................................................................@.......................................................................................#........#...........................................@......................#........#.........................#..................#........................#......................#...............@.#.........#.....#..............................................#........................................................................#..@.....................................................#......................................................................................@.........................................#...........................#..............................................#.......................@.............................................................#................................................#................#............@......#.......................................#.......................................#...............#.....................................@....................#.......#............................#................#...........................................................#.....@...........#.....................................................................................................#..........................@..........................................................................................#..............#..................................@..................................................#..........................................................................#..............@...............#............................................#.....................................................................#.........@........................#...........................................#............................#..................#.......................@................................................................................#..............................#.......................#....@......................................#...................................#..............#..............#...................................@..#............................................#..............#...........................................................#.................@.........#........................#...................#.....................................................................................@.............................#..............................................................................................................@....................................................................................#.......................................................@.........................#.............#............................................................#......#......#.........#......#........@...................#...........................................................................#...........................................#@.......#...............................................#.....#........#..........#..........................................................@..............#....................#........................................................................................................@........................................................................................................#.................#...........#.....@..#...............................................................#.........#.......#.......................................................@.........#......................#..........................#.....................................#............#.............................@...................#.................................#.................................................................#....................@....................................#.......................................................................................................@...........................#......................................................................................................#.........@............................................#.................#............#...................#.......#...................#................@............#.....................................#.........................................................................................@...........................................................................................................#......#.........................@.....................................#..............................................#......#................................................@.........................................................................#..............................................#...................@#....................#........#...................................................................#.....................................#...@.....#........................................#.........#........................#.........................................................."
//TODO add rawFull

let data = rawFull

data=data.split("@")
for(let i = 0; i<data.length;i++){
    data[i]=data[i].split("")
}


console.log(data)
// console.log(data[0])
// console.log(data[1])

let upDatedData = []
for(let i=0; i<data.length;i++){
    if(checkEmpty(data[i])){
        console.log( i + " is empty")
        upDatedData.push(data[i])
    }
    upDatedData.push(data[i])
}

console.log(upDatedData)
upDatedData = transpose(upDatedData)
console.log(upDatedData)
let upDatedData2 = []
for(let i=0; i<upDatedData.length;i++){
    if(checkEmpty(upDatedData[i])){
        upDatedData2.push(upDatedData[i])
    }
    upDatedData2.push(upDatedData[i])
}
console.log(upDatedData2)
//TODO next line breaks, WHY?
upDatedData2 = transpose(upDatedData2)


data = upDatedData2
// data is now the matrix with  empty rows doubled
console.log(data)

let locations = []
for(let r=0; r<data.length; r++){
    for(let c=0; c<data[0].length;c++){
        if(data[r][c]=="#"){
            //console.log("# at r: "+ r + "  col: "+ c)
            locations.push([r,c])
        }
    }
}
// locations is the list of [r,c] for each "#" in the matrix
console.log(locations)

let finalSum = 0
for(let i=0; i<locations.length-1;i++){
    for(let j= (i+1); j<locations.length; j++){
        //console.log("i: " + locations[i] + " j: "+ locations[j])
        //console.log(distance(locations[i],locations[j]))
        finalSum += distance(locations[i],locations[j])
    }
}
console.log("------Final Sum----------")
console.log(finalSum)



// // //console.log(distance([11,2],[3,5]))

// takes a list of characters and checks if they are all "."
function checkEmpty(list){
    for(let i =0; i<list.length;i++){
        if(list[i]!= "."){
            return false
        }
    }
    return true
}

//exchanges rows and cols of a matrix
// https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript 
// something was wrong with my transpose matrix, can't see what,  see comments at bottom of code
function transpose(matrix){
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

//takes two [r,c] and returns right angle distance
function distance(pos1, pos2){
    return ( Math.abs(pos1[0]-pos2[0])+Math.abs(pos1[1]-pos2[1]) )
}

//This is the broken transpose,  it worked fine when testing but not with the actual full data set.
// function transpose(matrix){
//     let final = []
//     for(let i = 0; i<matrix[i].length;i++){
//         let row = []
//         for(let j=0; j<matrix.length;j++){
//             row.push(matrix[j][i])
//         }
//         final.push(row)
//     }
//     return final
// }
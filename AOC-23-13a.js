let rawEx = "#.##..##.,..#.##.#.,##......#,##......#,..#.##.#.,..##..##.,#.#.##.#.,,#...##..#,#....#..#,..##..###,#####.##.,#####.##.,..##..###,#....#..#"

let data = rawEx

data = data.split(",,")
console.log(data)
for(let i = 0; i<data.length;i++){
    data[i]=data[i].split(",")
}
console.log(data)
console.log(data[1][3])
console.log(data[1][4])
console.log(rowsMatch(data[1][2],data[1][5]))

function rowsMatch(rowA,rowB){
    if(rowA.length!=rowB.length){
        return false
    }
    for(let i = 0; i<rowA.length;i++){
        if(rowA[i]!=rowB[i]){
            return false
        }
    }
    return true
}

function HorSymAt(grid,rInd){
    rowTop = rInd
    rowBot = rInd+1
    while(rowTop>=0 && rowBot<=grid.length)
}
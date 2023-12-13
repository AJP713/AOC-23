//https://adventofcode.com/2023/day/6

let dataEx= ["7  15   30","9  40  200"]
let dataFormatEx = [[7,9],[15,40],[30,200]]

let dataFull = ["53     83     72     88","333   1635   1289   1532"]
let dataFormatFull = [[53,333],[83,1635],[72,1289],[88,1532]]
let data = dataFormatFull

console.log(data)
console.log(data[0])

let final = 1
for(let x = 0; x<data.length;x++){
    let records = 0
    for(let i=0; i<data[x][0];i++){
        let dist = i*(data[x][0]-i)
        if(dist>data[x][1]){
            records ++
        }
    }
    console.log(records)
    final = final*records
}
console.log(final)
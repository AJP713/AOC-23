//https://adventofcode.com/2023/day/6

let dataEx= ["7  15   30","9  40  200"]
let dataFormatEx = [71530,940200]

let dataFull = [53837288,333163512891532]
let dataFormatFull = [[53,333],[83,1635],[72,1289],[88,1532]]
let data = dataFull

console.log(data)
console.log(data[0])


let records = 0
for(let i=1; i<data[0];i++){
    let dist = i*(data[0]-i)
    if(dist>data[1]){
        records ++
    }
}
console.log(records)
    


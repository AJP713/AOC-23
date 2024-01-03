let rawEx = "???.### 1,1,3@.??..??...?##. 1,1,3@?#?#?#?#?#?#?#? 1,3,1,6@????.#...#... 4,1,1@????.######..#####. 1,6,5@?###???????? 3,2,1"

let rawFull = "TODO"

let data = rawEx
data = data.split("@")
for(let i = 0; i<data.length; i++){
    data[i]=data[i].split(" ")
    data[i][0]=data[i][0].split("")
    data[i][1]=data[i][1].split(",")
    for(let j=0; j<data[i][1].length;j++){
        data[i][1][j]=Number(data[i][1][j])
    }
}
console.log(data[0])
console.log(data[0][0])
console.log(data[0][1])

//data is organized as an array of input lines data[x], each line seperated into 2 parts: data[x][0] is the array of starting symbols, and data[x][1] is the array of numbers



let test = [".","#",".","#","#","#", ".", ".","#","#"]
let test2 = ["#","#",".","#","#","#","#" ,".", ".","#","#","."]

console.log(checkValid(test,[1,3,2,5]))

//1st: takes board of "#" and "." as an array
//2nd: rules of consecutive #s as integers
//returns true or false if valid board.
function checkValid(board,rules){

    board.push(".")
    let streak = false //checks if previous character was a "#"
    let currLen = 0; //length of current streak
    let streakArr = []
    for(let i=0; i<board.length;i++){
        
        if(streak){ //previous was #
            if(board[i]=="#"){
                streak = true
                currLen ++
            }else{
                streakArr.push(currLen)
                streak = false
                currLen = 0
            }
        }else{ // previous was not #
            if(board[i]=="#"){
                streak = true
                currLen ++
            }else{
                streak = false
                currLen = 0
            }
        }
    }
    console.log(rules)
    console.log(streakArr)
    if(rules.length != streakArr.length){
        return false
    }
    for(let i = 0; i<rules.length; i++){
        if(rules[i]!=streakArr[i]){
            return false
        }
    }
    return true
}
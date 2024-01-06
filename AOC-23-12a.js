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

// console.log(data[0])
// console.log(data[2][0])
// console.log(data[2][1])
let totalPos = 0
for(let i=0; i<data.length; i++){
    totalPos += countPossible(data[i])
}
console.log("-----TOTAL: " + totalPos)




//data is organized as an array of input lines data[x], each line seperated into 2 parts: data[x][0] is the array of starting symbols, and data[x][1] is the array of numbers




//takes in a board of # . ?  and returns the count of #'s and count of ?s [#,?]
function countChar(board){
    let hash = 0
    let quest = 0
for(let i = 0; i<board.length;i++){
    if(board[i]=="#"){
        hash++
    }else if(board[i]=="?"){
        quest ++
    }
}
return [hash,quest]
}

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
    //console.log(rules)
    //console.log(streakArr)
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
// test for checkValid
// let test = [".","#",".","#","#","#", ".", ".","#","#"]
// let test2 = ["#","#",".","#","#","#","#" ,".", ".","#","#","."]
// console.log(checkValid(test,[1,3,2,5]))

//help from chatGPT
//function takes in two numbers, the number of digits for a binary number "n",  and the number of 1's in the number "k"
//it returns a list of all possible binary numbers with those conditions.
function generateBinaryNumbers(n, k) {
    let result = [];
    
    for (let i = 0; i < Math.pow(2, n); i++) {
        let binary = i.toString(2).padStart(n, '0');
        let onesCount = binary.split('').filter(bit => bit === '1').length;
        if (onesCount === k) {
            result.push(binary);
        }
    }

    return result;
}





//Takes in a single dataItem [board,rules] and returns the number of possible arrangments
//
function countPossible(dataItem){
    let countHQ = countChar(dataItem[0])
    let questCount = countHQ[1]
    let bombSum = dataItem[1].reduce((a,b) => a+b ); // sums the array using reduce
    let bombRemain = bombSum - countHQ[0]
    //console.log(dataItem[0])
    //console.log(dataItem[1])
    //console.log("?=" + questCount + "  #=" + countHQ[0]+ " totalBombs="+ bombSum)
    //console.log("bombs remaining= "+ bombRemain)
    let binArr = generateBinaryNumbers(countHQ[1],bombRemain)
    //console.log(binArr)
    let possibleCount = 0
    
    for(let x=0; x<binArr.length;x++){
    let testBoard = []
    binDigCount = 0
    for(let i=0;i<dataItem[0].length;i++){
        if(dataItem[0][i]=="?"){
            if(binArr[x][binDigCount]=="1"){
                testBoard.push("#")
            }else{
                testBoard.push(".")
            }
            binDigCount++
        }else{
            testBoard.push(dataItem[0][i])
        }
    }
    //console.log(testBoard)
    //console.log(checkValid(testBoard,dataItem[1]))
    if(checkValid(testBoard,dataItem[1])){
        possibleCount ++
    }
    
    }
    console.log("Possible count= " +possibleCount)
    return possibleCount
}


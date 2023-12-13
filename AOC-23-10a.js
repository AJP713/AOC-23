
let test = nextPos([4,5],[4,4],"L")
console.log(test)

//prev = previous [row,col]
//curr = current [row,col]
//char = currnt character "F", "J" "-"... 
function nextPos(prev, curr, char){
    if(char=="-"){
        if(prev[1]<curr[1]){ //left to right
            return [curr[0],curr[1]+1]
        }else{ //right to left
            return [curr[0],curr[1]-1]
        }
    }
    if(char=="|"){
        if(prev[0]<curr[0]){ //up to down
            return [curr[0]+1,curr[1]]
        }else{ //down to up
            return [curr[0]-1,curr[1]]
        }
    }
    if(char=="F"){
        if(prev[0]==curr[0]){//right to down
            return [curr[0]+1,curr[1]]
        }else{//down to right
            return [curr[0],curr[1]+1]
        }
    }
    if(char=="7"){
        if(prev[0]==curr[0]){//left to down
            return [curr[0]+1,curr[1]]
        }else{//down to left
            return [curr[0],curr[1]-1]
        }
    }
    if(char=="J"){
        if(prev[0]==curr[0]){//left to up
            return [curr[0]-1,curr[1]]
        }else{//up to left
            return [curr[0],curr[1]-1]
        }
    }
    if(char=="L"){
        if(prev[0]==curr[0]){//right to up
            return [curr[0]-1,curr[1]]
        }else{//up to right
            return [curr[0],curr[1]+1]
        }
    }
    
    else{
        console.log("error")
    }
}
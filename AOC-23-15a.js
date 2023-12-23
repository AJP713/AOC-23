let rawSmallEx=".|..@...-@/-./@..V|"

let data = rawSmallEx

data = data.split("@")
for(let i=0; i<data.length; i++){
    data[i]=data[i].split("")
}
console.log(data)
console.log(data[0])
let maxR = data.length-1
let maxC = data[0].length-1
console.log("max r: "+ maxR + "  max c: "+maxC)
//bmOb (beamObject) [row, col, direction, active?]
let beam = [0,0,"R",true]


//function takes a bmOb[r,c,dir,active?]
//returns true if next move is possible, false if it goes off edge
//console.log(isInside([0,2,"U",true]))
function isInside(bmOb){
    if(bmOb[2]=="R"){
        return !(bmOb[1]+1>maxC)
    }
    if(bmOb[2]=="L"){
        return !(bmOb[1]-1<0)
    }
    if(bmOb[2]=="D"){
        return !(bmOb[0]+1>maxR)
    }
    if(bmOb[2]=="U"){
        return !(bmOb[0]-1<0)
    }

}

//takes in a bmOb
//returns a list of possible next bmObs of 2, 1 or 0 bmOb  
//should NOT return off board moves
//ex:  [2,2,"R",active] where 2,2 is a "|" returns--> [[1,2,"U",true],[3,2,"D",true]]
//ex:  [2,2,"R",active] where 2,2 is a "/" returns--> [[1,2,"U",true]]
//ex:  [3,3,"R",active] where 3,3 is a "-"returns--> []
function nextBeams(bmOb){
    if(bmOb[2]=="R"){
        let char = data[bmOb[0]][bmOb[1]]
        if(char == "." || char=="-"){

        }

    }
    //L,U,D
}

let rawEx = "px{a<2006:qkq,m>2090:A,rfg}@pv{a>1716:R,A}@lnx{m>1548:A,A}@rfg{s<537:gd,x>2440:R,A}@qs{s>3448:A,lnx}@qkq{x<1416:A,crn}@crn{x>2662:A,R}@in{s<1351:px,qqz}@qqz{s>2770:qs,m<1801:hdj,R}@gd{a>3333:R,R}@hdj{m>838:A,pv}@@{x=787,m=2655,a=1222,s=2876}@{x=1679,m=44,a=2067,s=496}@{x=2036,m=264,a=79,s=2244}@{x=2461,m=1339,a=466,s=291}@{x=2127,m=1623,a=2188,s=1013}"

let data = rawEx
let inInd = 0
data=data.split("@@")
data[0]=data[0].split("@")
let rules = []
for(let x=0; x<data[0].length;x++){
let rule = []
if(data[0][x].match(/^[^{]*/)[0]=="in"){
    console.log("found in at: "+ x)
    inInd = x
}
rule.push(data[0][x].match(/^[^{]*/)[0])
data[0][x]=data[0][x].replace(/^[^{]*\{/, '');
data[0][x]=data[0][x].slice(0, -1)
data[0][x]=data[0][x].split(",")
for(let i=0; i<data[0][x].length;i++){
    rule.push(data[0][x][i].split(":"))
}
for(let i =0; i<rule.length;i++){
    if(rule[i].length==2){
        rule[i][0] = strIneq(rule[i][0])
    }
}
rules.push(rule)
}
//rules is the list of each rule in the format [start, [var, ineq, number], ...,else]

console.log(rules[3])
console.log(rules[3][0])
console.log(rules[3][1])
console.log(rules[3][1][0])
console.log(rules[3][1][0][0])


//setting up initial variable data format
data[1]=data[1].replace(/[{}]/g, '')
data[1]=data[1].split("@")
for(let i = 0; i<data[1].length;i++){
    data[1][i]=data[1][i].split(",")
    for(let j=0; j<data[1][i].length;j++){
        data[1][i][j]=data[1][i][j].slice(2)
        data[1][i][j] = Number(data[1][i][j])
    }
}
//XMAS is the list of all of the initial variables for each part.  the varaibles are in the order X,M,A,S
let XMAS = data[1]
//  console.log(XMAS)
//  console.log(XMAS[0])
//  console.log(XMAS[1])


//console.log(strIneq("x>3452"))
function strIneq(str){
    let v = str[0]
    let ineq = str[1]
    let c = str.slice(2)
    //console.log("v:"+ v + "  ineq: "+ ineq + "  c: "+ c)
    return[v,ineq,Number(c)]
}

console.log(rules[0][1])
console.log(rules[0][1][0])
console.log(XMAS[0])
ruleOut(rules[0][1])
function ruleOut(part,rule){

}
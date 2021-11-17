let readlinSync=require("readline-sync");
var num=readlinSync.questionInt("enter the number  ");
var i=1;
while(i<=num){
    if (i%3==0){
        console.log("#")
    }
    else if (i%5==0){
        console.log("*")
    }
    else{
        console.log(i)
    }
    i++
}
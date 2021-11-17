let readlinSync=require("readline-sync");
var num=readlinSync.questionInt("enter your name  ")
var i=1;
var s="";
while (i<=num){
    s=s+i+" ";
    i++
}
console.log(s)


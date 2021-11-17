let readlinSync=require("readline-sync");
var num=readlinSync.questionInt("enter the number ");
var i=1;
while (i<=10){
    console.log(num,"X",i,"=",num*i)
    i++
}
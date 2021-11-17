var i=0;
var s=0;
while (i<=10){
    let readlinSync=require("readline-sync");
    var num=readlinSync.questionInt("enter the number ");
    s=s+num;
    i++
}
console.log(s)


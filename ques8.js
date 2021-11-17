let readlinSync=require("readline-sync");
var num=readlinSync.questionInt("enter the number ");
s=0;
for (var i=0; i<=num; i++){
    s=s+i
}
console.log(s)

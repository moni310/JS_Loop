var i=50;
var s=0;
while (i>=40){
    let readlinSync=require("readline-sync");
    var num =readlinSync.questionInt("enter the number ")
    s= s+num;
    i--
}
console.log(s)
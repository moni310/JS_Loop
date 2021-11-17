let n=require("readline-sync");
let choose_ascii=(n.question("enter number: "));
var s="";
for (var i=97;i<=choose_ascii;i++) {
    s=s+String.fromCharCode(i)+" "}
console.log(s)
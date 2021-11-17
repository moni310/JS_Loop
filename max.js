let readlinSync=require("readline-sync");
let loop_time=readlinSync.questionInt("enter loop time: ");
 
var maxi=0;
let lis=[ ]
for (let i=1;i<=loop_time;i++) {
   let num=readlinSync.questionInt("enter number: ")
   lis.push(num)
}
var maxi=lis[0];
for (let j=0; j<lis.length; j++) {
   if (maxi<lis[j]) {
       [maxi=lis[j]]
   }
 
}
console.log(maxi)

let readlinSync=require("readline-sync");
var num=readlinSync.questionInt("enter your number  ");
var s=" ";
for(var i=1; i<=num; i++){
    if (i%7==0){
        s=s+i+" "
        
    }
}
console.log(s)

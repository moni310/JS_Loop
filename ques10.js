// var i=1;
// while (i<=100){
//     if (i%2==0){
//         console.log(-i)
//     }
//     else{
//         console.log(i)
//     }
//     i++
// }


var i=1;
s=" "
while (i<=100){
    if (i%2==0){
        s=s+(-i)+" "
    }
    else{
        s=s+i+" "
    }
    i++
}
console.log(s)
// n = 3
// *
// * *
// * * *
// let n = 3;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

let n = 3;

for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        // console.log("*");
        process.stdout.write("* ");
    }
    console.log("");
}
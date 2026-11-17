let testMatrix = [
    ["login","Pass", 3],
    ["logout","Fail", 4],
    ["refresh","Pass", 5]
];
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++)
        {
            process.stdout.write(testMatrix[i][j] + " ");
        //print without the new line
        }
    console.log("");
    //print with new line
}
console.log("---------")
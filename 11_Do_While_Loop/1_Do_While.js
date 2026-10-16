let retry=0;

do{
    console.log("Exectuting the code...");
    console.log("Retrying...",retry);
    retry++
}while(retry<3);
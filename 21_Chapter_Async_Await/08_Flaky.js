function createFlakyAPI(successAttempts) {
    let count = 0;
    return function() {
        count++;
        return new Promise(function(resolve, reject) {
            if (count < successAttempts) {
                reject(new Error("API call failed"));
            } else {
                resolve("Success");
            }
        });
    };
}
async function retryFlakyAPI() {
    let s= await createFlakyAPI(3);
    console.log("API call result:", s);
}
retryTesting(); 

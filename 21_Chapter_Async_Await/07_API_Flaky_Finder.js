//retry pattern with async await
function creatFLakyAPI() {
    let count = 0;
    return function() {
        count++;
        //return new Promise(function(resolve,reject) {
            if(count < 3) { 
                reject(new Error("API call failed"));
            } else {
                resolve("Success");
            }
        };
    }

    
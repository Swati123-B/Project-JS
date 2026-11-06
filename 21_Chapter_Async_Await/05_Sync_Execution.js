function apiCall() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("John", 200, "ok");
        }, 1000); 
    });
}
async function test() {
    let [name, statusCode, statusMessage] = await apiCall();
    console.log("Name:", name);
    console.log("Status Code:", statusCode);
    console.log("Status Message:", statusMessage);
}

async function test2() {
    let result = await apiCall();
    console.log("Result:", result);
}

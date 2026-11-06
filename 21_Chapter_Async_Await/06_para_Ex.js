function apiCall() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("John", 200, "ok");
        }, 1000); 
    });
}

async function parallelTest() {


    console.log("Test started");
    let result = await apiCall();

    console.log("Test Result", result);
    console.log("Test completed");

}
parallelTest();
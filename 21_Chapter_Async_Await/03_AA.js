function getTestResults(){

    return "pass";
}
getTestResults().then(function(result){
    console.log("Test Result",result);
});

async function testAPT() {
    try {
        let result = awaitPromise.reject("503 Service unavailable");
        console.log("Test Result",result);
    } catch(error) {
        console.error("Error",error);
    }  }; 

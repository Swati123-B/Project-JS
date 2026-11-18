//asyn wait example
async function getTestResult() {
    return "Test Passed";
}
getTestResult().then(function(result) {
    console.log("Test Result--",result);
}   );

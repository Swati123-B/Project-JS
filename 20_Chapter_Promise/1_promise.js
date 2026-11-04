let apiCall = new Promise(function(resolve,reject){
    resolve({state: 200, body: "User Data"});
});
    apiCall.then(function(response){
        console.log("Response",response);
    });


    let testRun = new Promise(function(resolve,reject){
        let testResult = ["pass","fail","pass","pass","fail"];
        resolve(testResult);
    });
    testRun.then(function(result){
        console.log("Test Result",result);
    }).catch(function(error){
        console.error("Error",error);
    });
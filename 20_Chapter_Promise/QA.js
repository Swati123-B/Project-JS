let p = new Promise(function(resolve,reject){
    let isAuthenticated = true;
    if(isAuthenticated) {
        resolve("User is authenticated");
    } else {
        reject("User is not authenticated");
    }       
}); 
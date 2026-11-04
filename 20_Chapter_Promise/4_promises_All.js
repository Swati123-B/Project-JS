let checkAuth = new Promise(function(resolve,reject){
    let isAuthenticated = true;
    if(isAuthenticated) {
        resolve("User is authenticated");
    } else {
        reject("User is not authenticated");
    }   
});

checkAuth.then(function(response){
    console.log("Response",response);
}).catch(function(error){
    console.error("Error",error);
}).finally(function(){
    console.log("Finally block executed");
});

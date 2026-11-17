let apiCall = new Promise(function(resolve,reject){
//resolve({state: 200});
reject({state: 500});
});
apiCall.then(function(response){
    console.log("Response",response);
}).catch(function(error){
    console.error("Error",error);
}).finally(function(){
    console.log("Finally block executed");
});
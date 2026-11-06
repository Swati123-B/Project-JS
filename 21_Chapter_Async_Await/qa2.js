async function riskyTest(){
    try {
        let data= await Promise.reject("503 Service unavailable");
        console.log("Test Result",data);
    } catch(error) {
        console.error("Error",error);
    }
}
riskyTest();


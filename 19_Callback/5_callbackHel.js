// Callback Hell Example
function openBrowser(callback) {
    console.log("Opening Browser");
    setTimeout(function() {
        console.log("Step1: Browser Opened");
        callback();
    }, 2000);
    function doSomething(callback) {
        console.log("Step2: Doing Something");
        setTimeout(function() {
            console.log("Step3: Done Something");
            callback();
        }, 2000);
        function closeBrowser() {
            console.log("Step4: Closing Browser");
            setTimeout(function() {
                console.log("Step5: Browser Closed");
            }, 2000);
        }
    }
}
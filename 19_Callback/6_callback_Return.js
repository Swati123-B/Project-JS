//callback return example
function openBrowser(callback) {
    console.log("Opening Browser");
    setTimeout(function() {
        console.log("Browser Opened");
        callback("Browser opened successfully");
    }, 2000);
}
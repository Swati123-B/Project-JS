function startbrowser() {
    let name = "Chrome";

    function installBrowser() {
        console.log(name);
    }
    return installBrowser;
}

const runTC = startbrowser();
runTC();
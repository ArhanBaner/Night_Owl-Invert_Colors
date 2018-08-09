chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "popup-click":
            // This executes the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // This puts the script inside the code
                allFrames: true 
            });
            sendResponse({}); // sending back empty response to sender
            break;              
        }
    }
);

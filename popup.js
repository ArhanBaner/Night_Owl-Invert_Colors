function clickHandler(e) {
    chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // This closes the popup when the application finishes processing the request
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleTheme').addEventListener('click', clickHandler);
})

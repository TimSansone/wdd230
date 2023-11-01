// JavaScript code to display the last updated time
var lastUpdatedElement = document.getElementById("lastUpdatedTime");

// Function to format the date and time
function formatDateTime(dateTime) {
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateTime).toLocaleDateString(undefined, options);
}

// Function to update the last updated time
function updateLastUpdatedTime() {
    var lastUpdated = formatDateTime(document.lastModified);
    lastUpdatedElement.textContent = lastUpdated;
}

// Update last updated time immediately
updateLastUpdatedTime();

// Update last updated time every second
setInterval(updateLastUpdatedTime, 1000);
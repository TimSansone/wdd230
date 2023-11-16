document.addEventListener("DOMContentLoaded", () => {
// select HTML elements in the document
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    // API url
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d";
    // Fetch API and display
    apiFetch(url).then(data => displayResults(currentTemp, weatherIcon, captionDesc, data));
});

/**
 * Fetches the data from given url
 * @param {String} url API request url
 * @returns JSON data object
 */
async function apiFetch(url) {
    // JSON data
    let data;

    try {
        // Fetch url
        const response = await fetch(url);
        // Verify response
        if (response.ok) {
        // Get JSON data
        data = await response.json();
        // Catch error
        } else {
            throw Error(await response.text());
        }
    // Catch error
    } catch (error) {
        console.log(error);
        return null;
    }
    return data;
}

/**
 * Properly displays the weather info
 * @param {HTMLElement} currentTemp HTML element to insert temperature
 * @param {HTMLElement} weatherIcon HTML img
 * @param {HTMLElement} captionDesc HTML figcaption
 * @param {Object} weatherData JSON data object
 */
function displayResults(currentTemp, weatherIcon, captionDesc, weatherData) {
    // Get the temperature in Fahrenheit without decimals
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    // Create url for icon
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    // Create alt text
    const desc = weatherData.weather[0].description.capitalize();
    // Set properties
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

/**
 * Returns the same capitalized string
 * @returns Capitalized String
 */
String.prototype.capitalize = function() {
    // split the string by spaces
    let arr = this.split(" ");
    // capitalized array
    let capArr = [];
    // loop through every word
    arr.forEach(word => {
        // capitalize word
        capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
    });
    // join array and return
    return capArr.join(" ");
}
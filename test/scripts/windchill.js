// Function to calculate wind chill
function calculateWindChill(temperatureFahrenheit, windSpeedMilesPerHour) {
    if (temperatureFahrenheit >= 50 || windSpeedMilesPerHour < 3) {
        return "N/A";
    } else {
        const windChill = 35.74 + 0.6215 * temperatureFahrenheit - 35.75 * Math.pow(windSpeedMilesPerHour, 0.16) + 0.4275 * temperatureFahrenheit * Math.pow(windSpeedMilesPerHour, 0.16);
        return windChill.toFixed(1); // Round to one decimal place
    }
}

// Retrieve temperature and wind speed from the weather.js script
const temperatureFahrenheit = parseFloat(document.getElementById('temperature').textContent.split(' ')[1].slice(0, -2));
const windSpeedMilesPerHour = parseFloat(document.getElementById('wind-speed').textContent.split(' ')[2]);

function calculateWindChill(temperatureFahrenheit, windSpeedMilesPerHour) {
    if (temperatureFahrenheit >= 50 || windSpeedMilesPerHour < 3) {
        document.getElementById('wind-chill').textContent = 'Wind Chill: N/A';
    } else {
        const windChill = 35.74 + 0.6215 * temperatureFahrenheit - 35.75 * Math.pow(windSpeedMilesPerHour, 0.16) + 0.4275 * temperatureFahrenheit * Math.pow(windSpeedMilesPerHour, 0.16);
        document.getElementById('wind-chill').textContent = 'Wind Chill: ${windChill}°F';
    }
}

// Calculate wind chill and update the HTML element
const windChill = calculateWindChill(temperatureFahrenheit, windSpeedMilesPerHour);
document.getElementById('wind-chill').textContent = `Wind Chill: ${windChill}°F`; */

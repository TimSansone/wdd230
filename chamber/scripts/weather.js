const apiKey = '4f73375e6cd748288b214e4f79bb62b4';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Orlando,us&appid=${apiKey}&units=metric`;

function calculateWindChill(temperatureFahrenheit, windSpeedMilesPerHour) {
    if (temperatureFahrenheit < 50 && windSpeedMilesPerHour >= 3) {
        const windChill = 35.74 + 0.6215 * temperatureFahrenheit - 35.75 * Math.pow(windSpeedMilesPerHour, 0.16) + 0.4275 * temperatureFahrenheit * Math.pow(windSpeedMilesPerHour, 0.16);
        return windChill.toFixed(1); // Round to one decimal place
    }
    return "N/A";
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract the relevant weather information
    const temperatureCelsius = data.main.temp;
    const temperatureFahrenheit = ((temperatureCelsius * 9 / 5) + 32).toFixed(1);
    const windSpeed = data.wind.speed.toFixed(1);
    const windSpeedMilesPerHour = (windSpeed * 2.23694).toFixed(1);
    const weatherDescription = data.weather[0].description;

    // Calculate wind chill
    const windChill = calculateWindChill(temperatureFahrenheit, windSpeedMilesPerHour);

    // Update the HTML elements with the weather information and wind chill
    document.getElementById('temperature').textContent = `Temperature: ${temperatureFahrenheit} °F`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeedMilesPerHour} mph`;
    document.getElementById('weather-description').textContent = `Description: ${weatherDescription}`;
    document.getElementById('wind-chill').textContent = `Wind Chill: ${windChill} °F`;
  })
  .catch((error) => console.error(error));

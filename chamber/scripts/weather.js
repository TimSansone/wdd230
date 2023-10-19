const apiKey = '4f73375e6cd748288b214e4f79bb62b4';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Orlando,us&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract the relevant weather information
    const temperatureCelsius = data.main.temp;
    const temperatureFahrenheit = ((temperatureCelsius * 9 / 5) + 32).toFixed(1);
    const windSpeed = data.wind.speed.toFixed(1);
    const windSpeedMilesPerHour = (windSpeed * 2.23694).toFixed(1);
    const weatherDescription = data.weather[0].description;

    // Update the HTML elements with the weather information
    document.getElementById('temperature').textContent = `Temperature: ${temperatureFahrenheit} °F`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeedMilesPerHour} mph`;
    document.getElementById('weather-description').textContent = `Description: ${weatherDescription}`;
  })
  .catch((error) => console.error(error));

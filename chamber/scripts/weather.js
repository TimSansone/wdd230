const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const city = 'Orlando';
const countryCode = 'US';
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon" class="weather-icon">`;
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();

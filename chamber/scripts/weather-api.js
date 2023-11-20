// URLs for fetching data
const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=28.54&lon=-81.38&appid=5a8231c5a5421807f22f48fd534cb44d&units=imperial";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=28.54&lon=-81.38&appid=5a8231c5a5421807f22f48fd534cb44d&units=imperial";

// Fetch current weather data
async function getCurrentWeatherData() {
    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            const currentTemp = data.main.temp;
            const weatherIcon = data.weather[0].icon;

            // Display current temperature and weather icon in the HTML card
            document.getElementById("currentTemp").innerHTML = `${currentTemp}° F`;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Fetch 4-day future forecast data
async function getForecastData() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            const dailyForecast = [];

            // Get the forecast for the 4 upcoming days
            for (let i = 0; i < 4; i++) {
                const forecastIndex = i * 8; // Each day has 8 data points
                const forecastDate = new Date(data.list[forecastIndex].dt * 1000).toDateString();
                const forecastTemperatures = data.list.slice(forecastIndex, forecastIndex + 8).map(entry => entry.main.temp);
          
                const highTemp = Math.max(...forecastTemperatures);
                const lowTemp = Math.min(...forecastTemperatures);

                dailyForecast.push({ date: forecastDate, highTemp, lowTemp });
            }

            // Display future forecast in the HTML card
            const forecastContainer = document.getElementById("forecastContainer");
            dailyForecast.forEach(forecast => {
                const forecastItem = document.createElement("div");
                forecastItem.innerHTML = `${forecast.date}: High ${forecast.highTemp}° F, Low ${forecast.lowTemp}° F`;
                forecastContainer.appendChild(forecastItem);
            });
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Fetch current weather data and future forecast data, then display in the HTML
getCurrentWeatherData();
getForecastData();

getCurrentWeatherData();
getForecastWeatherData();
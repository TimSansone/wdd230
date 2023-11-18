const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=28.54&lon=-81.38&appid=5a8231c5a5421807f22f48fd534cb44d&units=imperial";

async function getForecastData() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function renderForecastData(forecastData) {
    // Assuming there are 8 forecast data points per day
    const forecastedTemperatures = [];
    const currentDate = new Date();

    for (let i = 0; i < 4; i++) {
        const dateIndex = i * 8; // Each day has 8 data points
        const forecastDate = new Date(forecastData.list[dateIndex].dt * 1000);
        const forecastTemperature = forecastData.list[dateIndex].main.temp;
      
        forecastedTemperatures.push({
            date: forecastDate.toDateString(),
            temperature: forecastTemperature
        });
    }

    // Display forecasted temperatures in the HTML
    const forecastContainer = document.querySelector("#forecastContainer");

    forecastedTemperatures.forEach(forecast => {
        const forecastItem = document.createElement("div");
        forecastItem.innerHTML = `${forecast.date}: ${forecast.temperature}° F`;
        forecastContainer.appendChild(forecastItem);
    });
}

getForecastData().then(data => {
    renderForecastData(data);
});
In this code:

The getForecastData function fetches the forecast data from the provided URL and returns it as a JSON object.
The renderForecastData function processes the fetched forecast data, extracts the forecasted temperatures for the next 4 days, and then displays this data in the HTML. The temperatures are displayed in a container element with the id "forecastContainer" specified in the HTML.
Remember to include a <div> with the id "forecastContainer" in your HTML code to display the forecasted temperatures.


<div id="forecastContainer">
  <!-- Forecast temperatures will be displayed here -->
</div>
This JavaScript code fetches the forecasted temperatures for the next 4 days from the OpenWeatherMap API and dynamically displays them in the specified HTML container.

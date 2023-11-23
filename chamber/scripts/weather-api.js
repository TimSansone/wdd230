// URLs for fetching data
const currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=28.54&lon=-81.38&appid=5a8231c5a5421807f22f48fd534cb44d&units=imperial";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=28.54&lon=-81.38&appid=5a8231c5a5421807f22f48fd534cb44d&units=imperial";
const currentTemp = document.querySelector("#currentTemp");
const icon = document.querySelector("#weatherIcon");
const weatherDescription = document.querySelector("#weatherDesc");
const forecast = document.querySelector("#futureForecast");

//Setting up today's date
const currentDay = Date.now();
const todayObject = new Date(currentDay);
const todayWeekday = todayObject.toLocaleString("en-US", {weekday: "long"});
const todayMonth = todayObject.toLocaleString("en-US", {month: "long"});
const todayDay = todayObject.toLocaleString("en-US", {day: "numeric"});
const todayYear = todayObject.toLocaleString("en-US", {year: "numeric"});

// Fetch current weather data
async function getCurrentWeatherData() {
    try{
        const response = await fetch(currentURL);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        }

        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

// Fetch 4-day future forecast data
async function getForecastData() {
    try{
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecastWeather(data);
        }
    else {
        throw Error(await response.text);
    }
    }
    catch (error) {
        consol.log(error);
    }
}
    
function displayCurrentWeather(data) {
    currentTemp.innerHTML = '${data.main.temp}° F';
    icon.setAttribute("src", 'https://openweathermap.org/img/wn/${data.weather[0].icon}.png');
    weatherDescription.innerHTML = data.weather[0].description;
}

function displayForecastWeather(data) {
    data.list.forEach(entry => {
        const unixDT = entry.dt;
        const milliseconds = unixDT * 1000;
        const dateObject = new Date(milliseconds);
        const weekday = dateObject.toLocaleString("en-US", {weekday: "short"});
        const month = dateObject.toLocaleString("en-US", {month: "short"});
        const day = dateObject.toLocaleString("en-US", {day: "numeric"});
        const year = dateObject.toLocaleString("en-US", {year: "numeric"});
        const hour = dateObject.toLocaleString("en-US", {hour: "numeric"});
        
        if (weekday !== todayWeekday) {
            const checkDay = weekday;
            
            if (hour == "2 PM") {
                const forecastHigh = entry.main.temp_max;
                const date = document.createElement("span");
                date.innerHTML = '${weekday}, ${month} ${day}, ${year}:'
                const high = document.createElement("p");
                high.InnerHTML = '${forecastHigh}° F';
                
                forecast.appendChild(date)
                forecast.appendChild(high);
            }
        }
    });
}

getCurrentWeatherData();
getForecastWeatherData();

const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDesc = document.querySelector("#weather-info");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#windchill");
const forecastCont = document.querySelector(".forecast-inf");

const url1 = "https://api.openweathermap.org/data/2.5/weather?lat=28.54&lon=-81.38&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d";

const url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=28.54&lon=-81.38&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d";

async function apiFetchW(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        alert(error);
    }
}

async function apiFetchF(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        alert(error);
    }
}

function capitalizeString(string) {
    let words = string.split(" ");
    let capWord = words
        .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    return capWord;
}

function displayWeather(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let temp = data.main.temp;
    let desc = data.weather[0].description;
    let capDesc = capitalizeString(desc);
    let wind = data.wind.speed;
    currentTemp.innerHTML = `${temp.toFixed(1)}`;
    weatherDesc.innerHTML = capDesc;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].main);
    weatherIcon.setAttribute("width", "50");
    weatherIcon.setAttribute("height", "50");
    windSpeed.textContent = wind;
    calculateWindchill(temp.toFixed(0), wind);
}

function calculateWindchill(num1, num2) {
    if (num1 <= 50 && num2 > 3.0) {
        let windChillFactor = 35.74 + (0.6215 * num1) - (35.75 * (num2 ** 0.16)) + ((0.4275 * num1) * (num2 ** 0.16));
        windChill.textContent = windChillFactor.toFixed(2);
    } else {
        windChill.textContent = "N/A";
    }
}

function displayForecast(data) {
    const days = []
    const dateNow = new Date();
    const dayNow = dateNow.getDate();
    let dayRange = 0;
    let counter = 0;

    //Gabriel Ferrin Helped with this code
    data.list.forEach((forecast) => {
        const futureDate = new Date(forecast.dt * 1000);
        const nextDay = futureDate.getDate();
        if(dayNow !== nextDay && dayRange !== nextDay && counter <= 2) {
            counter++;
            dayRange = nextDay;
            days.push(forecast);
        }
    });

    days.forEach((item) => {
        const iconsrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        const container = document.createElement("div");
        const paragraphDate = document.createElement("p");
        const paragraphTemp = document.createElement("p");
        const iconWeather = document.createElement("img");
        const weatherDesc = document.createElement("p");
        const newDate = new Date(item.dt * 1000);

        paragraphDate.textContent = newDate.toLocaleString('default', {month: "short", day: "numeric"});
        paragraphTemp.innerHTML = `${item.main.temp.toFixed(1)}&deg;F`;
        iconWeather.setAttribute("src", iconsrc);
        iconWeather.setAttribute("alt", item.weather[0].main);
        iconWeather.setAttribute("class", "weather-icon");
        iconWeather.setAttribute("width", "50");
        iconWeather.setAttribute("height", "50");
        weatherDesc.textContent = capitalizeString(item.weather[0].description);

        container.append(paragraphDate, paragraphTemp, iconWeather, weatherDesc);
        forecastCont.append(container);
    });
}

apiFetchW(url1);
apiFetchF(url2);

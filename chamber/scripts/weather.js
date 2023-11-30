const currentTemp = document.querySelector ('#current-temp'); 
const weatherIcon = document.querySelector ('#weather-icon');
const captionDesc= document.querySelector('figcaption');
const forecastCont = document.querySelector(".forecast");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#windchill");
const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=28.54&lon=-81.38&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d`
const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=28.54&lon=-81.38&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d`


async function apiFetch(url) {
    try {
        const response = await fetch (url1)
        const response2 = await fetch(url2)
        if(url= url1) {
            
            if (response.ok) {
                const data = await response.json(); 
                displayResults (data); 
            } 
            else { throw Error (await response.text());
            }
        }
        if(url= url2) {
            if (response2.ok) {
                const data = await response2.json(); 
                displayForecast(data);
            } 
            else { throw Error (await response2.text());
            }
        }
    } 
    catch (error) {
        console.log(error);   
    }  
}
function calculateWindchill(num1, num2) {
    if (num1 <= 50 && num2 > 3.0) {
        let windChillFactor = 35.74 + (0.6215 * num1) - (35.75 * (num2 ** 0.16)) + ((0.4275 * num1) * (num2 ** 0.16));
        windChill.textContent = windChillFactor.toFixed(2);
    } else {
        windChill.textContent = "N/A";
    }
}

function displayResults (data) {
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src',iconsrc);
    let desc = data.weather[0].description;
    let temp= `${data.main.temp.toFixed(0) } &deg; F`;
    let wind = data.wind.speed;

    currentTemp.innerHTML = `${temp} - ${desc}`;   

    windSpeed.textContent = wind;
    calculateWindchill(temp, wind);
}

function displayForecast(data) {
    const days = []
    const dateNow = new Date();
    const dayNow = dateNow.getDate();
    let dayRange = 0;
    let counter = 0;

    //Source (Shecodes.com)
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
        const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
        const container = document.createElement("div");
        const date2 = document.createElement("span");
        const temp2 = document.createElement("span");
        const iconWeather = document.createElement("img");
        const hr = document.createElement("hr")

        const newDate = new Date(item.dt * 1000);
        let desc = item.weather[0].description;
        let temp= `${item.main.temp.toFixed(1)}&deg;F`;
        iconWeather.setAttribute("src", iconsrc);
        iconWeather.setAttribute("alt", item.weather[0].main);
        date2.textContent = newDate.toLocaleString('default', {month: "short", day: "numeric"});
        temp2.innerHTML = `${temp} - ${desc}`;
        container.append(date2, iconWeather, temp2, hr);
        forecastCont.append(container);

        
        // forecastCont.innerHTML = `${temp} - ${desc}`;

    });
    
    
}


apiFetch(url1);

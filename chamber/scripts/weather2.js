const url = "https://api.openweathermap.org/data/2.5/weather?lat=28.54&lon=-81.38&units=imperial&appid=5a8231c5a5421807f22f48fd534cb44d";
const weatherInfo = document.querySelector('#weather');

async function getData(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data.list);
            loadForecast(data);
        }else{
            throw Error(await response.text());
        }

    }catch(error){
        console.log(error);
    }
}
function loadForecast(data){ 
   const weatherCard = document.createElement('article');
   const weatherNow = document.createElement('div');
   const dayIcon = document.createElement('img');
   const dayNum = document.createElement('span');
   const speed = document.createElement('p');
   const chill = document.createElement('p');
   dayNum.setAttribute('id', 'temp');
   const dayDesc = document.createElement('span');
   const weatherHead = document.createElement('h3');
   const forecastHead = document.createElement('h3');
   const iconSource = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
   const todayDesc = data.list[0].weather[0].description;
   
   speed.textContent = `Wind Speed: ${data.list[0].wind.speed} mph`;

   weatherHead.textContent = "Current Weather"
   forecastHead.textContent = "3-Day Forecast"
   dayIcon.setAttribute('src', iconSource);
   dayIcon.setAttribute('alt', `Icon for ${todayDesc}`);
   dayNum.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;C`;
   let indexOfTempType = dayNum.innerHTML.length - 1;
   const windSpeed = data.list[0].wind.speed;   
   let temperature = data.list[0].main.temp;
   let windChill;
   if (dayNum[indexOfTempType] == "C"){
    temperature = ((9/5) * temperature) + 32;
   }
   if (temperature <= 50 && windSpeed >= 3){
    
    windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

    windChill = Math.round(windChill);
   }
   else {
    windChill = "N/A"
   }
   chill.textContent = `Wind Chill: ${windChill}°C`;
   dayDesc.textContent = `  ${todayDesc}`;
   weatherNow.appendChild(weatherHead)
   weatherNow.appendChild(dayIcon);
   weatherNow.appendChild(dayNum);
   weatherNow.appendChild(dayDesc);
   weatherCard.appendChild(weatherNow);
   weatherCard.appendChild(speed);
   weatherCard.appendChild(speed);
   weatherCard.appendChild(chill);
   weatherCard.appendChild(forecastHead);

   let i = 8;
   while( i < 25){
    let forecastWeather = document.createElement('div');
    let forecastDate = document.createElement('span');
    let forecastIcon = document.createElement('img');
    let forecastNum = document.createElement('span');
    let forecastDesc = document.createElement('span');

    let dateStr = data.list[i].dt_txt;
    dateStr = dateStr.substring(0,10);
  
     forecastDate.textContent = dateStr;

     let forecastIconImage = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
     let fDesc = ` ${data.list[i].weather[0].description}`;
     forecastIcon.setAttribute('src', forecastIconImage);
     forecastIcon.setAttribute('alt', `icon for ${fDesc}`);
     forecastNum.innerHTML = `${data.list[i].main.temp}&deg;C`
     forecastDesc.textContent = fDesc;
     
     forecastWeather.appendChild(forecastDate);
     forecastWeather.appendChild(forecastIcon);
     forecastWeather.appendChild(forecastNum);
     forecastWeather.appendChild(forecastDesc);
     weatherCard.appendChild(forecastWeather);
     i += 8;    
   } 
  weatherInfo.append(weatherCard);
}
getData();

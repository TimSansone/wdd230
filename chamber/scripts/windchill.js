// const tempCelcius = document.querySelector('#temperature').value;
// const windSpeed = document.querySelector('#wind-speed').value;

// // Converts temperature from Celsius to Fahrenheit
// function toFahrenheit(celsius) { return celsius * 9 / 5 + 32; }

// /*Converts temperature from Fahrenheit to Celsius*/
// function toCelsius(fahrenheit) { return (fahrenheit - 32) * 5 / 9; }

// /**Converts kilometers to miles*/
// function toMiles(km) { return km / 1.609; }


// //  Calculates, if possible, the wind chill
// function getWindChill(tempF, windSpeedMph) {
//     // Check values
//     if(tempF <= 50 && windSpeedMph > 3) {
//         // Calculate wind chill
//         return 35.74 + 0.6215 * tempF- 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
//     }
//     else { return NaN; }
// }

//     // Get temperature value
//     const tempF = toFahrenheit(tempCelcius);
//     // Get wind speed value
//     const windSpeedMph = toMiles(windSpeed);
//     // Calculate wind chill value
//     const windChill = getWindChill(tempF, windSpeedMph);
//     // Set value
//     document.querySelector("#wind-chill span").textContent = isNaN(windChill)? "N/A" : `${toCelsius(windChill).toFixed(1)} °C`;

// console.log(tempF)
  

import {apiKey} from "./apikey.js"

// current forecast
let currentTemperature = document.getElementById('currentTemperature');
let currentWeather = document.getElementById('currentWeather');
let currentHigh = document.getElementById('currentHigh');
let currentLow = document.getElementById('currentLow');
let currentFeel = document.getElementById('currentFeel');
let currentHumidity = document.getElementById('currentHumidity');
let currentIcon = document.getElementById('currentIcon');

// 5 day forecast



async function weatherAPI() {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.575764&lon=-121.478851&appid=${apiKey}&units=imperial`);

  const data = await promise.json();

  currentTemperature.textContent = Math.round(data.main.temp) + '°';
  currentWeather.textContent = data.weather[0].description;
  currentHigh.textContent = Math.round(data.main.temp_max) + '°';
  currentLow.textContent = Math.round(data.main.temp_min) + '°';
  currentFeel.textContent = Math.round(data.main.feels_like) + '°';
  currentHumidity.textContent = Math.round(data.main.humidity) + '%';

  if(data.weather[0].description === 'clear sky') {
    currentIcon.src = './assets/dayclear.png';
  }else if(data.weather[0].description === 'few clouds'){
    currentIcon.src = './assets/daycloud.png';
  }else if(data.weather[0].description === 'scattered clouds'){
    currentIcon.src = './assets/cloud.png';
  }else if (data.weather[0].description === 'broken clouds' || 'overcast clouds'){
    currentIcon.src = './assets/abouttorain.png';
  }

  console.log('Current main temp: ' + data.main.temp);
  console.log('Current feels like temp: ' + data.main.feels_like);
  console.log('Current low temp: ' + data.main.temp_min);
  console.log('Current high temp: ' + data.main.temp_max);
  console.log('Current humidity: ' + data.main.humidity + '%');
  console.log('Current weather: ' + data.weather[0].description);

}

async function weather5DayAPI() {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=stockton&appid=${apiKey}&units=imperial`);

  const data = await promise.json();


  console.log(data.list[0].main.temp_min);
  console.log(data.list[0].main.temp_max);

  console.log(data.list[1].main.temp_min);
  console.log(data.list[1].main.temp_max);

  console.log(data.list[2].main.temp_min);
  console.log(data.list[2].main.temp_max);

  console.log(data.list[3].main.temp_min);
  console.log(data.list[3].main.temp_max);


}

weatherAPI();

weather5DayAPI();

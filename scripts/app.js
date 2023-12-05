import {apiKey} from "./apikey.js"

let userInput = document.getElementById('userInput');
let searchBtn = document.getElementById('searchBtn');

// current forecast
let location = document.getElementById('location');
let currentTemperature = document.getElementById('currentTemperature');
let currentWeather = document.getElementById('currentWeather');
let currentHigh = document.getElementById('currentHigh');
let currentLow = document.getElementById('currentLow');
let currentFeel = document.getElementById('currentFeel');
let currentHumidity = document.getElementById('currentHumidity');
let currentIcon = document.getElementById('currentIcon');

// 5 day forecast



searchBtn.addEventListener('click', function(e) {
  currentSearchAPI(userInput.value);
  userInput.value = "";
});

// on load code

let lon = '';
let lat = '';

  navigator.geolocation.getCurrentPosition(success, errorFunc);

  function success(position) {

  lon = position.coords.longitude;
  lat = position.coords.latitude;
  console.log(lat);
  console.log(lon);
  }

  function errorFunc(error) {
  console.log(error.message);
  }

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
  }else if(data.weather[0].description === 'broken clouds' || 'overcast clouds'){
    currentIcon.src = './assets/abouttorain.png';
  }else if(data.weather[0].main === 'Thunderstorm'){
    currentIcon.src = './assets/storm.png';
  }else if(data.weather[0].main === 'Drizzle' || 'Rain'){
    currentIcon.src = './assets/rain.png';
  }else if(data.weather[0].main === 'Snow'){
    currentIcon.src = './assets/snow.png';
  }else if(data.weather[0].main === 'Atmosphere'){
    currentIcon.src = './assets/Hazy.png';
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

// end of on load code

// search code

async function currentSearchAPI(search) {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`);
  const data = await promise.json();

  location.textContent = data.name.toUpperCase();
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
  }else if(data.weather[0].description === 'broken clouds' || 'overcast clouds'){
    currentIcon.src = './assets/abouttorain.png';
  }else if(data.weather[0].main === 'Thunderstorm'){
    currentIcon.src = './assets/storm.png';
  }else if(data.weather[0].main === 'Drizzle' || 'Rain'){
    currentIcon.src = './assets/rain.png';
  }else if(data.weather[0].main === 'Snow'){
    currentIcon.src = './assets/snow.png';
  }else if(data.weather[0].main === 'Atmosphere'){
    currentIcon.src = './assets/Hazy.png';
  }

}

// end of search code
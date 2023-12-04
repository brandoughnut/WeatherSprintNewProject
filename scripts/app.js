import {apiKey} from "./apikey.js"

async function weatherAPI() {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.575764&lon=-121.478851&appid=${apiKey}`);

  const data = await promise.json();


  console.log(data.main.temp);
  console.log(data.main.feels_like);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.main.humidity);
  console.log(data.weather[0].description);

}

async function weather5DayAPI() {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.575764&lon=-121.478851&appid=${apiKey}`);

  const data = await promise.json();


  console.log(data.main.temp);
  console.log(data.main.feels_like);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.main.humidity);
  console.log(data.weather[0].main);

}

weatherAPI();
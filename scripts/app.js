import {apiKey} from "./apikey.js"

async function weatherAPI() {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.575764&lon=-121.478851&appid=${apiKey}&units=imperial`);

  const data = await promise.json();


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

import { apiKey } from "./apikey.js";

let userInput = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");

// current forecast
let location = document.getElementById("location");
let currentTemperature = document.getElementById("currentTemperature");
let currentWeather = document.getElementById("currentWeather");
let currentHigh = document.getElementById("currentHigh");
let currentLow = document.getElementById("currentLow");
let currentFeel = document.getElementById("currentFeel");
let currentHumidity = document.getElementById("currentHumidity");
let currentIcon = document.getElementById("currentIcon");
let currentDate = document.getElementById("currentDate");
let day1 = document.getElementById("day1");
let date1 = document.getElementById("date1");
let day2 = document.getElementById("day2");
let date2 = document.getElementById("date2");
let day3 = document.getElementById("day3");
let date3 = document.getElementById("date3");
let day4 = document.getElementById("day4");
let date4 = document.getElementById("date4");
let day5 = document.getElementById("day5");
let date5 = document.getElementById("date5");

// 5 day forecast

searchBtn.addEventListener("click", function (e) {
  currentSearchAPI(userInput.value);
  locationName(userInput.value);
  console.log(userInput.value);
  userInput.value = "";
});

// on load code

let lon = "";
let lat = "";

// current weekday
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const w = new Date();
let weekDay = days[w.getDay()];

// current month
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const m = new Date();
let month = months[m.getMonth()];

// current day
const d = new Date();
d.getDate();

currentDate.textContent = weekDay + ', ' + month + ' ' + d.getDate();

if(w.getDay()+1 > 6) {
  day1.textContent = days[w.getDay()-7];
  date1.textContent = month + ' '+(d.getDate()+1);
}else{
  day1.textContent = days[w.getDay()+1];
  date1.textContent = month + ' '+(d.getDate()+1);
}

if(w.getDay()+2 > 6){
  day2.textContent = days[w.getDay()-6];
  date2.textContent = month + ' '+(d.getDate()+2);
}else{
  day2.textContent = days[w.getDay()+2];
  date2.textContent = month + ' '+(d.getDate()+2);
}

if(w.getDay()+3 > 6){
  day3.textContent = days[w.getDay()-4];
  date3.textContent = month + ' '+(d.getDate()+3);
}else{
  day3.textContent = days[w.getDay()+3];
  date3.textContent = month + ' '+(d.getDate()+3);
}

if(w.getDay()+4 > 6){
  day4.textContent = days[w.getDay()-3];
  date4.textContent = month + ' '+(d.getDate()+4);
}else{
  day4.textContent = days[w.getDay()+4];
  date4.textContent = month + ' '+(d.getDate()+4);
}

if(w.getDay()+5 > 6){
  day5.textContent = days[w.getDay()-2];
  date5.textContent = month + ' '+(d.getDate()+5);

}else{
  day5.textContent = days[w.getDay()+5];
  date5.textContent = month + ' '+(d.getDate()+5);
}

navigator.geolocation.getCurrentPosition(success, errorFunc);

function success(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  console.log(lat);
  console.log(lon);
  weatherAPI(lat, lon);
}

function errorFunc(error) {
  console.log(error.message);
}

async function weatherAPI(latitude, longitude) {

  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
  );

  const data = await promise.json();

  currentTemperature.textContent = Math.round(data.main.temp) + "°";
  currentWeather.textContent = data.weather[0].description;
  currentHigh.textContent = Math.round(data.main.temp_max) + "°";
  currentLow.textContent = Math.round(data.main.temp_min) + "°";
  currentFeel.textContent = Math.round(data.main.feels_like) + "°";
  currentHumidity.textContent = Math.round(data.main.humidity) + "%";

  if (data.weather[0].description === "clear sky") {
    currentIcon.src = "./assets/dayclear.png";
  } else if (data.weather[0].description === "few clouds") {
    currentIcon.src = "./assets/daycloud.png";
  } else if (data.weather[0].description === "scattered clouds") {
    currentIcon.src = "./assets/cloud.png";
  } else if (
    data.weather[0].description === "broken clouds" ||
    data.weather[0].description === "overcast clouds"
  ) {
    currentIcon.src = "./assets/abouttorain.png";
  } else if (data.weather[0].main === "Thunderstorm") {
    currentIcon.src = "./assets/storm.png";
  } else if (
    data.weather[0].main === "Drizzle" ||
    data.weather[0].main === "Rain"
  ) {
    currentIcon.src = "./assets/rain.png";
  } else if (data.weather[0].main === "Snow") {
    currentIcon.src = "./assets/snow.png";
  } else if (
    data.weather[0].main === "Mist" ||
    data.weather[0].main === "Smoke" ||
    data.weather[0].main === "Haze" ||
    data.weather[0].main === "Dust" ||
    data.weather[0].main === "Fog" ||
    data.weather[0].main === "Sand" ||
    data.weather[0].main === "Ash" ||
    data.weather[0].main === "Squall" ||
    data.weather[0].main === "Tornado"
  ) {
    currentIcon.src = "./assets/windy.png";
  }

  console.log("Current main temp: " + data.main.temp);
  console.log("Current feels like temp: " + data.main.feels_like);
  console.log("Current low temp: " + data.main.temp_min);
  console.log("Current high temp: " + data.main.temp_max);
  console.log("Current humidity: " + data.main.humidity + "%");
  console.log("Current weather: " + data.weather[0].description);
  console.log(data.weather[0].main);
}

async function weather5DayAPI() {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=stockton&appid=${apiKey}&units=imperial`
  );

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

weather5DayAPI();

// end of on load code

// search code

async function currentSearchAPI(search) {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=imperial`
  );
  const data = await promise.json();

  currentTemperature.textContent = Math.round(data.main.temp) + "°";
  currentWeather.textContent = data.weather[0].description;
  currentHigh.textContent = Math.round(data.main.temp_max) + "°";
  currentLow.textContent = Math.round(data.main.temp_min) + "°";
  currentFeel.textContent = Math.round(data.main.feels_like) + "°";
  currentHumidity.textContent = Math.round(data.main.humidity) + "%";

  if (data.weather[0].description === "clear sky") {
    currentIcon.src = "./assets/dayclear.png";
  } else if (data.weather[0].description === "few clouds") {
    currentIcon.src = "./assets/daycloud.png";
  } else if (data.weather[0].description === "scattered clouds") {
    currentIcon.src = "./assets/cloud.png";
  } else if (
    data.weather[0].description === "broken clouds" ||
    data.weather[0].description === "overcast clouds"
  ) {
    currentIcon.src = "./assets/abouttorain.png";
  } else if (data.weather[0].main === "Thunderstorm") {
    currentIcon.src = "./assets/storm.png";
  } else if (
    data.weather[0].main === "Drizzle" ||
    data.weather[0].main === "Rain"
  ) {
    currentIcon.src = "./assets/rain.png";
  } else if (data.weather[0].main === "Snow") {
    currentIcon.src = "./assets/snow.png";
  } else if (
    data.weather[0].main === "Mist" ||
    data.weather[0].main === "Smoke" ||
    data.weather[0].main === "Haze" ||
    data.weather[0].main === "Dust" ||
    data.weather[0].main === "Fog" ||
    data.weather[0].main === "Sand" ||
    data.weather[0].main === "Ash" ||
    data.weather[0].main === "Squall" ||
    data.weather[0].main === "Tornado"
  ) {
    currentIcon.src = "./assets/windy.png";
  }
}

async function locationName(input) {
  const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`);
  
  const data = await promise.json();

  if(data[0].state === 'Alabama'){
    location.textContent = data[0].name.toUpperCase() + ', AL'; 
  }else if(data[0].state === 'Alaska'){
    location.textContent = data[0].name.toUpperCase() + ', AK'; 
  }else if(data[0].state === 'Arizona'){
    location.textContent = data[0].name.toUpperCase() + ', AZ'; 
  }else if(data[0].state === 'Arkansas'){
    location.textContent = data[0].name.toUpperCase() + ', AR'; 
  }else if(data[0].state === 'California'){
    location.textContent = data[0].name.toUpperCase() + ', CA'; 
  }else if(data[0].state === 'Colorado'){
    location.textContent = data[0].name.toUpperCase() + ', CO'; 
  }else if(data[0].state === 'Conneticut'){
    location.textContent = data[0].name.toUpperCase() + ', CT'; 
  }else if(data[0].state === 'District of Columbia'){
    location.textContent = data[0].name.toUpperCase() + ', DC'; 
  }else if(data[0].state === 'Delaware'){
    location.textContent = data[0].name.toUpperCase() + ', DE'; 
  }else if(data[0].state === 'Florida'){
    location.textContent = data[0].name.toUpperCase() + ', FL'; 
  }else if(data[0].state === 'Georgia'){
    location.textContent = data[0].name.toUpperCase() + ', GA'; 
  }else if(data[0].state === 'Hawaii'){
    location.textContent = data[0].name.toUpperCase() + ', HI'; 
  }else if(data[0].state === 'Idaho'){
    location.textContent = data[0].name.toUpperCase() + ', ID'; 
  }else if(data[0].state === 'Illinois'){
    location.textContent = data[0].name.toUpperCase() + ', IL'; 
  }else if(data[0].state === 'Indiana'){
    location.textContent = data[0].name.toUpperCase() + ', IN'; 
  }else if(data[0].state === 'Iowa'){
    location.textContent = data[0].name.toUpperCase() + ', IA'; 
  }else if(data[0].state === 'Kansas'){
    location.textContent = data[0].name.toUpperCase() + ', KS'; 
  }else if(data[0].state === 'Kentucky'){
    location.textContent = data[0].name.toUpperCase() + ', KY'; 
  }else if(data[0].state === 'Louisiana'){
    location.textContent = data[0].name.toUpperCase() + ', LA'; 
  }else if(data[0].state === 'Maine'){
    location.textContent = data[0].name.toUpperCase() + ', ME'; 
  }else if(data[0].state === 'Maryland'){
    location.textContent = data[0].name.toUpperCase() + ', MD'; 
  }else if(data[0].state === 'Massachusetts'){
    location.textContent = data[0].name.toUpperCase() + ', MA'; 
  }else if(data[0].state === 'Michigan'){
    location.textContent = data[0].name.toUpperCase() + ', MI'; 
  }else if(data[0].state === 'Minnesota'){
    location.textContent = data[0].name.toUpperCase() + ', MN'; 
  }else if(data[0].state === 'Mississippi'){
    location.textContent = data[0].name.toUpperCase() + ', MS'; 
  }else if(data[0].state === 'Missouri'){
    location.textContent = data[0].name.toUpperCase() + ', MO'; 
  }else if(data[0].state === 'Montana'){
    location.textContent = data[0].name.toUpperCase() + ', MT'; 
  }else if(data[0].state === 'Nebraska'){
    location.textContent = data[0].name.toUpperCase() + ', NE'; 
  }else if(data[0].state === 'Nevada'){
    location.textContent = data[0].name.toUpperCase() + ', NV'; 
  }else if(data[0].state === 'New Hampshire'){
    location.textContent = data[0].name.toUpperCase() + ', NH'; 
  }else if(data[0].state === 'New Jersey'){
    location.textContent = data[0].name.toUpperCase() + ', NJ'; 
  }else if(data[0].state === 'New Mexico'){
    location.textContent = data[0].name.toUpperCase() + ', NM'; 
  }else if(data[0].state === 'New York'){
    location.textContent = data[0].name.toUpperCase() + ', NY'; 
  }else if(data[0].state === 'North Carolina'){
    location.textContent = data[0].name.toUpperCase() + ', NC'; 
  }else if(data[0].state === 'North Dakota'){
    location.textContent = data[0].name.toUpperCase() + ', ND'; 
  }else if(data[0].state === 'Ohio'){
    location.textContent = data[0].name.toUpperCase() + ', OH'; 
  }else if(data[0].state === 'Oklahoma'){
    location.textContent = data[0].name.toUpperCase() + ', OK'; 
  }else if(data[0].state === 'Oregon'){
    location.textContent = data[0].name.toUpperCase() + ', OR'; 
  }else if(data[0].state === 'Pennsylvania'){
    location.textContent = data[0].name.toUpperCase() + ', PA'; 
  }else if(data[0].state === 'Rhode Island'){
    location.textContent = data[0].name.toUpperCase() + ', RI'; 
  }else if(data[0].state === 'South Carolina'){
    location.textContent = data[0].name.toUpperCase() + ', SC'; 
  }else if(data[0].state === 'South Dakota'){
    location.textContent = data[0].name.toUpperCase() + ', SD'; 
  }else if(data[0].state === 'Tennessee'){
    location.textContent = data[0].name.toUpperCase() + ', TN'; 
  }else if(data[0].state === 'Texas'){
    location.textContent = data[0].name.toUpperCase() + ', TX'; 
  }else if(data[0].state === 'Utah'){
    location.textContent = data[0].name.toUpperCase() + ', UT'; 
  }else if(data[0].state === 'Vermont'){
    location.textContent = data[0].name.toUpperCase() + ', VT'; 
  }else if(data[0].state === 'Virginia'){
    location.textContent = data[0].name.toUpperCase() + ', VA'; 
  }else if(data[0].state === 'Washington'){
    location.textContent = data[0].name.toUpperCase() + ', WA'; 
  }else if(data[0].state === 'West Virginia'){
    location.textContent = data[0].name.toUpperCase() + ', WV'; 
  }else if(data[0].state === 'Wisconsin'){
    location.textContent = data[0].name.toUpperCase() + ', WI'; 
  }else if(data[0].state === 'Wyoming'){
    location.textContent = data[0].name.toUpperCase() + ', WY'; 
  }else{
    location.textContent = data[0].name.toUpperCase() + ', ' + data[0].country;
  }
}

// end of search code


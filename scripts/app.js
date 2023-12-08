import { apiKey } from "./apikey.js";

export {savedFavorites}

let userInput = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");
let switchBG = document.getElementById("switchBG");
let switchBox = document.getElementById("switchBox");
let favoriteBtn = document.getElementById("favoriteBtn");
let favoriteBtnColor = document.getElementById("favoriteBtnColor");
let favorites = document.getElementById("favorites");
let changeBG = document.getElementById("changeBG");
// let favoritesBoxes = document.getElementById("favoritesBoxes");
let injectFavorite = document.getElementById("injectFavorite");

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
let weather1 = document.getElementById("weather1");
let weather2 = document.getElementById("weather2");
let weather3 = document.getElementById("weather3");
let weather4 = document.getElementById("weather4");
let weather5 = document.getElementById("weather5");
let day1Low = document.getElementById("day1Low");
let day2Low = document.getElementById("day2Low");
let day3Low = document.getElementById("day3Low");
let day4Low = document.getElementById("day4Low");
let day5Low = document.getElementById("day5Low");
let day1High = document.getElementById("day1High");
let day2High = document.getElementById("day2High");
let day3High = document.getElementById("day3High");
let day4High = document.getElementById("day4High");
let day5High = document.getElementById("day5High");

let savedFavorites = [];
let favoriteCity;

savedFavorites = JSON.parse(localStorage.getItem("favorited")) || [];

console.log(savedFavorites);


if(favoriteBtnColor){
  favoriteBtnColor.addEventListener("click", function () {

    let locationIndex = savedFavorites.findIndex(function(loc) {
        return loc === favoriteCity;
    });
    if (locationIndex !== -1) {
        savedFavorites.splice(locationIndex, 1);
        favoriteBtn.src = "./assets/1e124fac-ffe5-4d0b-af1b-4990f9090e40.png"
        favoriteBtnColor.className = "BtnFavorite";
    } else {
        savedFavorites.push(favoriteCity);
        favoriteBtn.src = "./assets/favorited.png"
        favoriteBtnColor.className = "BtnFavorite2";
    }
    console.log(savedFavorites);
  
    console.log(favoriteCity);
  
    localStorage.setItem("favorited", JSON.stringify(savedFavorites));
  });

}

if(searchBtn){
  searchBtn.addEventListener("click", function (e) {
  locationName(userInput.value);
  console.log("User search: " + userInput.value);
  userInput.value = "";
  highTemp1 = 0;
  lowTemp1;
  highTemp2 = 0;
  lowTemp2;
  highTemp3 = 0;
  lowTemp3;
  highTemp4 = 0;
  lowTemp4;
  highTemp5 = 0;
  lowTemp5;
});
}



// on load code

let lon = "";
let lat = "";

let highTemp1 = 0;
let lowTemp1;
let highTemp2 = 0;
let lowTemp2;
let highTemp3 = 0;
let lowTemp3;
let highTemp4 = 0;
let lowTemp4;
let highTemp5 = 0;
let lowTemp5;

// current time
const t = new Date();
if(day1){
if (t.getHours() >= 7 && t.getHours() <= 18) {
  switchBG.className = "mainBG";
  switchBox.className = "currentLocationBox row";
  location.className = "locationHeader";
} else {
  switchBG.className = "nightBG";
  switchBox.className = "currentLocationNightBox row";
  location.className = "locationHeaderNight";
}
}

if(changeBG){
  if(t.getHours() >= 7 && t.getHours() <= 18){
  changeBG.className = "mainBG";
  favorites.className = "locationHeader";
  // favoritesBoxes.className = "card fiveDayBox";
}else{
  changeBG.className = "nightBG";
  favorites.className = "locationHeaderNight"
  // favoritesBoxes.className = "card favoritesDayBox";
}
}



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

if(day1){
currentTime();
dayName();
dateNumber();
}

function currentTime(){
// current date start
if (d.getDate() === 1 || d.getDate() === 21 || d.getDate() === 31) {
  currentDate.textContent = weekDay + ", " + month + " " + d.getDate() + "st";
} else if (d.getDate() === 2 || d.getDate() === 22) {
  currentDate.textContent = weekDay + ", " + month + " " + d.getDate() + "nd";
} else if (d.getDate() === 3 || d.getDate() === 23) {
  currentDate.textContent = weekDay + ", " + month + " " + d.getDate() + "rd";
} else {
  currentDate.textContent = weekDay + ", " + month + " " + d.getDate() + "th";
}
// current date end
}

function dayName() {
  // 5 day forecast days start
  if (w.getDay() + 1 > 6) {
    day1.textContent = days[w.getDay() - 6];
  } else {
    day1.textContent = days[w.getDay() + 1];
  }

  if (w.getDay() + 2 > 6) {
    day2.textContent = days[w.getDay() - 5];
  } else {
    day2.textContent = days[w.getDay() + 2];
  }

  if (w.getDay() + 3 > 6) {
    day3.textContent = days[w.getDay() - 4];
  } else {
    day3.textContent = days[w.getDay() + 3];
  }

  if (w.getDay() + 4 > 6) {
    day4.textContent = days[w.getDay() - 3];
  } else {
    day4.textContent = days[w.getDay() + 4];
  }

  if (w.getDay() + 5 > 6) {
    day5.textContent = days[w.getDay() - 2];
  } else {
    day5.textContent = days[w.getDay() + 5];
  }
  // 5 day forecast days end
}

function dateNumber(){
// 5 day forecast date start
if (d.getDate() + 1 > 31) {
  date1.textContent =
    months[m.getMonth() + 1] + " " + (d.getDate() - 30) + "th";
  if (m.getMonth() + 1 > 12) {
    date1.textContent =
      months[m.getMonth() - 11] + " " + (d.getDate() - 30) + "th";
  }
} else {
  if (
    d.getDate() + 1 === 1 ||
    d.getDate() + 1 === 21 ||
    d.getDate() + 1 === 31
  ) {
    date1.textContent = month + " " + (d.getDate() + 1) + "st";
  } else if (d.getDate() + 1 === 2 || d.getDate() + 1 === 22) {
    date1.textContent = month + " " + (d.getDate() + 1) + "nd";
  } else if (d.getDate() + 1 === 3 || d.getDate() + 1 === 23) {
    date1.textContent = month + " " + (d.getDate() + 1) + "rd";
  } else {
    date1.textContent = month + " " + (d.getDate() + 1) + "th";
  }
}

if (d.getDate() + 2 > 31) {
  date2.textContent = months[m.getMonth() + 1] + " " + (d.getDate() - 30);
  if (m.getMonth() + 1 > 12) {
    date2.textContent = months[m.getMonth() - 11] + " " + (d.getDate() - 30);
  }
} else {
  if (
    d.getDate() + 2 === 1 ||
    d.getDate() + 2 === 21 ||
    d.getDate() + 2 === 31
  ) {
    date2.textContent = month + " " + (d.getDate() + 2) + "st";
  } else if (d.getDate() + 2 === 2 || d.getDate() + 2 === 22) {
    date2.textContent = month + " " + (d.getDate() + 2) + "nd";
  } else if (d.getDate() + 2 === 3 || d.getDate() + 2 === 23) {
    date2.textContent = month + " " + (d.getDate() + 2) + "rd";
  } else {
    date2.textContent = month + " " + (d.getDate() + 2) + "th";
  }
}

if (d.getDate() + 3 > 31) {
  date3.textContent = months[m.getMonth() + 1] + " " + (d.getDate() - 30);
  if (m.getMonth() + 1 > 12) {
    date3.textContent = months[m.getMonth() - 11] + " " + (d.getDate() - 30);
  }
} else {
  if (
    d.getDate() + 3 === 1 ||
    d.getDate() + 3 === 21 ||
    d.getDate() + 3 === 31
  ) {
    date3.textContent = month + " " + (d.getDate() + 3) + "st";
  } else if (d.getDate() + 3 === 2 || d.getDate() + 3 === 22) {
    date3.textContent = month + " " + (d.getDate() + 3) + "nd";
  } else if (d.getDate() + 3 === 3 || d.getDate() + 3 === 23) {
    date3.textContent = month + " " + (d.getDate() + 3) + "rd";
  } else {
    date3.textContent = month + " " + (d.getDate() + 3) + "th";
  }
}

if (d.getDate() + 4 > 31) {
  date4.textContent = months[m.getMonth() + 1] + " " + (d.getDate() - 30);
  if (m.getMonth() + 1 > 12) {
    date4.textContent = months[m.getMonth() - 11] + " " + (d.getDate() - 30);
  }
} else {
  if (
    d.getDate() + 4 === 1 ||
    d.getDate() + 4 === 21 ||
    d.getDate() + 4 === 31
  ) {
    date4.textContent = month + " " + (d.getDate() + 4) + "st";
  } else if (d.getDate() + 4 === 2 || d.getDate() + 4 === 22) {
    date4.textContent = month + " " + (d.getDate() + 4) + "nd";
  } else if (d.getDate() + 4 === 3 || d.getDate() + 4 === 23) {
    date4.textContent = month + " " + (d.getDate() + 4) + "rd";
  } else {
    date4.textContent = month + " " + (d.getDate() + 4) + "th";
  }
}

if (d.getDate() + 5 > 31) {
  date5.textContent = months[m.getMonth() + 1] + " " + (d.getDate() - 30);
  if (m.getMonth() + 1 > 12) {
    date5.textContent = months[m.getMonth() - 11] + " " + (d.getDate() - 30);
  }
} else {
  if (
    d.getDate() + 5 === 1 ||
    d.getDate() + 5 === 21 ||
    d.getDate() + 5 === 31
  ) {
    date5.textContent = month + " " + (d.getDate() + 5) + "st";
  } else if (d.getDate() + 5 === 2 || d.getDate() + 5 === 22) {
    date5.textContent = month + " " + (d.getDate() + 5) + "nd";
  } else if (d.getDate() + 5 === 3 || d.getDate() + 5 === 23) {
    date5.textContent = month + " " + (d.getDate() + 5) + "rd";
  } else {
    date5.textContent = month + " " + (d.getDate() + 5) + "th";
  }
}
// 5 day forecast date end
}

navigator.geolocation.getCurrentPosition(success, errorFunc);

function success(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  console.log("Current lat: " + lat);
  console.log("Current lon: " + lon);
  if(day1){
  weatherAPI(lat, lon);
  weather5DayAPI(lat, lon);
  }
  
}

function errorFunc(error) {
  alert("Please turn on your location");
}

async function weatherAPI(latitude, longitude) {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
  );
  const data = await promise.json();
  
  favoriteCity = data.name;

  if(savedFavorites.includes(favoriteCity)){
    favoriteBtn.src = "./assets/favorited.png"
    favoriteBtnColor.className = "BtnFavorite2";
  }else{
    favoriteBtn.src = "./assets/1e124fac-ffe5-4d0b-af1b-4990f9090e40.png"
    favoriteBtnColor.className = "BtnFavorite";
  }

  console.log("Current location: " + data.name);
  currentTemperature.textContent = Math.round(data.main.temp) + "°";
  currentWeather.textContent = data.weather[0].description;
  currentHigh.textContent = Math.round(data.main.temp_max) + "°";
  currentLow.textContent = Math.round(data.main.temp_min) + "°";
  currentFeel.textContent = Math.round(data.main.feels_like) + "°";
  currentHumidity.textContent = Math.round(data.main.humidity) + "%";

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.weather[0].description === "clear sky") {
      currentIcon.src = "./assets/01dd.png";
    } else if (data.weather[0].description === "few clouds") {
      currentIcon.src = "./assets/02dd.png";
    } else if (data.weather[0].description === "scattered clouds") {
      currentIcon.src = "./assets/03dd.png";
    } else if (
      data.weather[0].description === "broken clouds" ||
      data.weather[0].description === "overcast clouds"
    ) {
      currentIcon.src = "./assets/04dd.png";
    } else if (data.weather[0].main === "Thunderstorm") {
      currentIcon.src = "./assets/11dd.png";
    } else if (
      data.weather[0].main === "Drizzle" ||
      data.weather[0].main === "Rain"
    ) {
      currentIcon.src = "./assets/09dd.png";
    } else if (data.weather[0].main === "Snow") {
      currentIcon.src = "./assets/13d.png";
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
      currentIcon.src = "./assets/50d.png";
    }
  } else {
    if (data.weather[0].description === "clear sky") {
      currentIcon.src = "./assets/01nn.png";
    } else if (data.weather[0].description === "few clouds") {
      currentIcon.src = "./assets/02nn.png";
    } else if (data.weather[0].description === "scattered clouds") {
      currentIcon.src = "./assets/03dd.png";
    } else if (
      data.weather[0].description === "broken clouds" ||
      data.weather[0].description === "overcast clouds"
    ) {
      currentIcon.src = "./assets/04dd.png";
    } else if (data.weather[0].main === "Thunderstorm") {
      currentIcon.src = "./assets/11dd.png";
    } else if (
      data.weather[0].main === "Drizzle" ||
      data.weather[0].main === "Rain"
    ) {
      currentIcon.src = "./assets/09dd.png";
    } else if (data.weather[0].main === "Snow") {
      currentIcon.src = "./assets/13d.png";
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
      currentIcon.src = "./assets/50d.png";
    }
  }

  // console.log("Current main temp: " + data.main.temp);
  // console.log("Current feels like temp: " + data.main.feels_like);
  // console.log("Current low temp: " + data.main.temp_min);
  // console.log("Current high temp: " + data.main.temp_max);
  // console.log("Current humidity: " + data.main.humidity + "%");
  // console.log("Current weather: " + data.weather[0].description);
  // console.log(data.weather[0].main);
}

async function weather5DayAPI(latitude, longitude) {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
  );

  const data = await promise.json();

  // weather start
  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[0].weather[0].description === "clear sky") {
      weather1.src = "./assets/01dd.png";
    } else if (data.list[0].weather[0].description === "few clouds") {
      weather1.src = "./assets/02dd.png";
    } else if (data.list[0].weather[0].description === "scattered clouds") {
      weather1.src = "./assets/03dd.png";
    } else if (
      data.list[0].weather[0].description === "broken clouds" ||
      data.list[0].weather[0].description === "overcast clouds"
    ) {
      weather1.src = "./assets/04dd.png";
    } else if (data.list[0].weather[0].main === "Thunderstorm") {
      weather1.src = "./assets/11dd.png";
    } else if (
      data.list[0].weather[0].main === "Drizzle" ||
      data.list[0].weather[0].main === "Rain"
    ) {
      weather1.src = "./assets/09dd.png";
    } else if (data.list[0].weather[0].main === "Snow") {
      weather1.src = "./assets/13d.png";
    } else if (
      data.list[0].weather[0].main === "Mist" ||
      data.list[0].weather[0].main === "Smoke" ||
      data.list[0].weather[0].main === "Haze" ||
      data.list[0].weather[0].main === "Dust" ||
      data.list[0].weather[0].main === "Fog" ||
      data.list[0].weather[0].main === "Sand" ||
      data.list[0].weather[0].main === "Ash" ||
      data.list[0].weather[0].main === "Squall" ||
      data.list[0].weather[0].main === "Tornado"
    ) {
      weather1.src = "./assets/50d.png";
    }
  } else {
    if (data.list[0].weather[0].description === "clear sky") {
      weather1.src = "./assets/01nn.png";
    } else if (data.list[0].weather[0].description === "few clouds") {
      weather1.src = "./assets/02nn.png";
    } else if (data.list[0].weather[0].description === "scattered clouds") {
      weather1.src = "./assets/03dd.png";
    } else if (
      data.list[0].weather[0].description === "broken clouds" ||
      data.list[0].weather[0].description === "overcast clouds"
    ) {
      weather1.src = "./assets/04dd.png";
    } else if (data.list[0].weather[0].main === "Thunderstorm") {
      weather1.src = "./assets/11dd.png";
    } else if (
      data.list[0].weather[0].main === "Drizzle" ||
      data.list[0].weather[0].main === "Rain"
    ) {
      weather1.src = "./assets/09dd.png";
    } else if (data.list[0].weather[0].main === "Snow") {
      weather1.src = "./assets/13d.png";
    } else if (
      data.list[0].weather[0].main === "Mist" ||
      data.list[0].weather[0].main === "Smoke" ||
      data.list[0].weather[0].main === "Haze" ||
      data.list[0].weather[0].main === "Dust" ||
      data.list[0].weather[0].main === "Fog" ||
      data.list[0].weather[0].main === "Sand" ||
      data.list[0].weather[0].main === "Ash" ||
      data.list[0].weather[0].main === "Squall" ||
      data.list[0].weather[0].main === "Tornado"
    ) {
      weather1.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[8].weather[0].description === "clear sky") {
      weather2.src = "./assets/01dd.png";
    } else if (data.list[8].weather[0].description === "few clouds") {
      weather2.src = "./assets/02dd.png";
    } else if (data.list[8].weather[0].description === "scattered clouds") {
      weather2.src = "./assets/03dd.png";
    } else if (
      data.list[8].weather[0].description === "broken clouds" ||
      data.list[8].weather[0].description === "overcast clouds"
    ) {
      weather2.src = "./assets/04dd.png";
    } else if (data.list[8].weather[0].main === "Thunderstorm") {
      weather2.src = "./assets/11dd.png";
    } else if (
      data.list[8].weather[0].main === "Drizzle" ||
      data.list[8].weather[0].main === "Rain"
    ) {
      weather2.src = "./assets/09dd.png";
    } else if (data.list[8].weather[0].main === "Snow") {
      weather2.src = "./assets/13d.png";
    } else if (
      data.list[8].weather[0].main === "Mist" ||
      data.list[8].weather[0].main === "Smoke" ||
      data.list[8].weather[0].main === "Haze" ||
      data.list[8].weather[0].main === "Dust" ||
      data.list[8].weather[0].main === "Fog" ||
      data.list[8].weather[0].main === "Sand" ||
      data.list[8].weather[0].main === "Ash" ||
      data.list[8].weather[0].main === "Squall" ||
      data.list[8].weather[0].main === "Tornado"
    ) {
      weather2.src = "./assets/50d.png";
    }
  } else {
    if (data.list[8].weather[0].description === "clear sky") {
      weather2.src = "./assets/01nn.png";
    } else if (data.list[8].weather[0].description === "few clouds") {
      weather2.src = "./assets/02nn.png";
    } else if (data.list[8].weather[0].description === "scattered clouds") {
      weather2.src = "./assets/03dd.png";
    } else if (
      data.list[8].weather[0].description === "broken clouds" ||
      data.list[8].weather[0].description === "overcast clouds"
    ) {
      weather2.src = "./assets/04dd.png";
    } else if (data.list[8].weather[0].main === "Thunderstorm") {
      weather2.src = "./assets/11dd.png";
    } else if (
      data.list[8].weather[0].main === "Drizzle" ||
      data.list[8].weather[0].main === "Rain"
    ) {
      weather2.src = "./assets/09dd.png";
    } else if (data.list[8].weather[0].main === "Snow") {
      weather2.src = "./assets/13d.png";
    } else if (
      data.list[8].weather[0].main === "Mist" ||
      data.list[8].weather[0].main === "Smoke" ||
      data.list[8].weather[0].main === "Haze" ||
      data.list[8].weather[0].main === "Dust" ||
      data.list[8].weather[0].main === "Fog" ||
      data.list[8].weather[0].main === "Sand" ||
      data.list[8].weather[0].main === "Ash" ||
      data.list[8].weather[0].main === "Squall" ||
      data.list[8].weather[0].main === "Tornado"
    ) {
      weather2.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[16].weather[0].description === "clear sky") {
      weather3.src = "./assets/01dd.png";
    } else if (data.list[16].weather[0].description === "few clouds") {
      weather3.src = "./assets/02dd.png";
    } else if (data.list[16].weather[0].description === "scattered clouds") {
      weather3.src = "./assets/03dd.png";
    } else if (
      data.list[16].weather[0].description === "broken clouds" ||
      data.list[16].weather[0].description === "overcast clouds"
    ) {
      weather3.src = "./assets/04dd.png";
    } else if (data.list[16].weather[0].main === "Thunderstorm") {
      weather3.src = "./assets/11dd.png";
    } else if (
      data.list[16].weather[0].main === "Drizzle" ||
      data.list[16].weather[0].main === "Rain"
    ) {
      weather3.src = "./assets/09dd.png";
    } else if (data.list[16].weather[0].main === "Snow") {
      weather3.src = "./assets/13d.png";
    } else if (
      data.list[16].weather[0].main === "Mist" ||
      data.list[16].weather[0].main === "Smoke" ||
      data.list[16].weather[0].main === "Haze" ||
      data.list[16].weather[0].main === "Dust" ||
      data.list[16].weather[0].main === "Fog" ||
      data.list[16].weather[0].main === "Sand" ||
      data.list[16].weather[0].main === "Ash" ||
      data.list[16].weather[0].main === "Squall" ||
      data.list[16].weather[0].main === "Tornado"
    ) {
      weather3.src = "./assets/50d.png";
    }
  } else {
    if (data.list[16].weather[0].description === "clear sky") {
      weather3.src = "./assets/01nn.png";
    } else if (data.list[16].weather[0].description === "few clouds") {
      weather3.src = "./assets/02nn.png";
    } else if (data.list[16].weather[0].description === "scattered clouds") {
      weather3.src = "./assets/03dd.png";
    } else if (
      data.list[16].weather[0].description === "broken clouds" ||
      data.list[16].weather[0].description === "overcast clouds"
    ) {
      weather3.src = "./assets/04dd.png";
    } else if (data.list[16].weather[0].main === "Thunderstorm") {
      weather3.src = "./assets/11dd.png";
    } else if (
      data.list[16].weather[0].main === "Drizzle" ||
      data.list[16].weather[0].main === "Rain"
    ) {
      weather3.src = "./assets/09dd.png";
    } else if (data.list[16].weather[0].main === "Snow") {
      weather3.src = "./assets/13d.png";
    } else if (
      data.list[16].weather[0].main === "Mist" ||
      data.list[16].weather[0].main === "Smoke" ||
      data.list[16].weather[0].main === "Haze" ||
      data.list[16].weather[0].main === "Dust" ||
      data.list[16].weather[0].main === "Fog" ||
      data.list[16].weather[0].main === "Sand" ||
      data.list[16].weather[0].main === "Ash" ||
      data.list[16].weather[0].main === "Squall" ||
      data.list[16].weather[0].main === "Tornado"
    ) {
      weather3.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[24].weather[0].description === "clear sky") {
      weather4.src = "./assets/01dd.png";
    } else if (data.list[24].weather[0].description === "few clouds") {
      weather4.src = "./assets/02dd.png";
    } else if (data.list[24].weather[0].description === "scattered clouds") {
      weather4.src = "./assets/03dd.png";
    } else if (
      data.list[24].weather[0].description === "broken clouds" ||
      data.list[24].weather[0].description === "overcast clouds"
    ) {
      weather4.src = "./assets/04dd.png";
    } else if (data.list[24].weather[0].main === "Thunderstorm") {
      weather4.src = "./assets/11dd.png";
    } else if (
      data.list[24].weather[0].main === "Drizzle" ||
      data.list[24].weather[0].main === "Rain"
    ) {
      weather4.src = "./assets/09dd.png";
    } else if (data.list[24].weather[0].main === "Snow") {
      weather4.src = "./assets/13d.png";
    } else if (
      data.list[24].weather[0].main === "Mist" ||
      data.list[24].weather[0].main === "Smoke" ||
      data.list[24].weather[0].main === "Haze" ||
      data.list[24].weather[0].main === "Dust" ||
      data.list[24].weather[0].main === "Fog" ||
      data.list[24].weather[0].main === "Sand" ||
      data.list[24].weather[0].main === "Ash" ||
      data.list[24].weather[0].main === "Squall" ||
      data.list[24].weather[0].main === "Tornado"
    ) {
      weather4.src = "./assets/50d.png";
    }
  } else {
    if (data.list[24].weather[0].description === "clear sky") {
      weather4.src = "./assets/01nn.png";
    } else if (data.list[24].weather[0].description === "few clouds") {
      weather4.src = "./assets/02nn.png";
    } else if (data.list[24].weather[0].description === "scattered clouds") {
      weather4.src = "./assets/03dd.png";
    } else if (
      data.list[24].weather[0].description === "broken clouds" ||
      data.list[24].weather[0].description === "overcast clouds"
    ) {
      weather4.src = "./assets/04dd.png";
    } else if (data.list[24].weather[0].main === "Thunderstorm") {
      weather4.src = "./assets/11dd.png";
    } else if (
      data.list[24].weather[0].main === "Drizzle" ||
      data.list[24].weather[0].main === "Rain"
    ) {
      weather4.src = "./assets/09dd.png";
    } else if (data.list[24].weather[0].main === "Snow") {
      weather4.src = "./assets/13d.png";
    } else if (
      data.list[24].weather[0].main === "Mist" ||
      data.list[24].weather[0].main === "Smoke" ||
      data.list[24].weather[0].main === "Haze" ||
      data.list[24].weather[0].main === "Dust" ||
      data.list[24].weather[0].main === "Fog" ||
      data.list[24].weather[0].main === "Sand" ||
      data.list[24].weather[0].main === "Ash" ||
      data.list[24].weather[0].main === "Squall" ||
      data.list[24].weather[0].main === "Tornado"
    ) {
      weather4.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[32].weather[0].description === "clear sky") {
      weather5.src = "./assets/01dd.png";
    } else if (data.list[32].weather[0].description === "few clouds") {
      weather5.src = "./assets/02dd.png";
    } else if (data.list[32].weather[0].description === "scattered clouds") {
      weather5.src = "./assets/03dd.png";
    } else if (
      data.list[32].weather[0].description === "broken clouds" ||
      data.list[32].weather[0].description === "overcast clouds"
    ) {
      weather5.src = "./assets/04dd.png";
    } else if (data.list[32].weather[0].main === "Thunderstorm") {
      weather5.src = "./assets/11dd.png";
    } else if (
      data.list[32].weather[0].main === "Drizzle" ||
      data.list[32].weather[0].main === "Rain"
    ) {
      weather5.src = "./assets/09dd.png";
    } else if (data.list[32].weather[0].main === "Snow") {
      weather5.src = "./assets/13d.png";
    } else if (
      data.list[32].weather[0].main === "Mist" ||
      data.list[32].weather[0].main === "Smoke" ||
      data.list[32].weather[0].main === "Haze" ||
      data.list[32].weather[0].main === "Dust" ||
      data.list[32].weather[0].main === "Fog" ||
      data.list[32].weather[0].main === "Sand" ||
      data.list[32].weather[0].main === "Ash" ||
      data.list[32].weather[0].main === "Squall" ||
      data.list[32].weather[0].main === "Tornado"
    ) {
      weather5.src = "./assets/50d.png";
    }
  } else {
    if (data.list[32].weather[0].description === "clear sky") {
      weather5.src = "./assets/01nn.png";
    } else if (data.list[32].weather[0].description === "few clouds") {
      weather5.src = "./assets/02nn.png";
    } else if (data.list[32].weather[0].description === "scattered clouds") {
      weather5.src = "./assets/03dd.png";
    } else if (
      data.list[32].weather[0].description === "broken clouds" ||
      data.list[32].weather[0].description === "overcast clouds"
    ) {
      weather5.src = "./assets/04dd.png";
    } else if (data.list[32].weather[0].main === "Thunderstorm") {
      weather5.src = "./assets/11dd.png";
    } else if (
      data.list[32].weather[0].main === "Drizzle" ||
      data.list[32].weather[0].main === "Rain"
    ) {
      weather5.src = "./assets/09dd.png";
    } else if (data.list[32].weather[0].main === "Snow") {
      weather5.src = "./assets/13d.png";
    } else if (
      data.list[32].weather[0].main === "Mist" ||
      data.list[32].weather[0].main === "Smoke" ||
      data.list[32].weather[0].main === "Haze" ||
      data.list[32].weather[0].main === "Dust" ||
      data.list[32].weather[0].main === "Fog" ||
      data.list[32].weather[0].main === "Sand" ||
      data.list[32].weather[0].main === "Ash" ||
      data.list[32].weather[0].main === "Squall" ||
      data.list[32].weather[0].main === "Tornado"
    ) {
      weather5.src = "./assets/50d.png";
    }
  }
  // weather end

  // 5 day forecast high and low start
  for (let i = 0; i < 8; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp1) {
      highTemp1 = high;
    }

    if (high <= lowTemp1 || lowTemp1 === undefined) {
      lowTemp1 = high;
    }
  }
  // console.log(highTemp1);
  // console.log(lowTemp1);

  for (let i = 8; i < 16; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp2) {
      highTemp2 = high;
    }

    if (high <= lowTemp2 || lowTemp2 === undefined) {
      lowTemp2 = high;
    }
  }
  // console.log(highTemp2);
  // console.log(lowTemp2);

  for (let i = 16; i < 24; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp3) {
      highTemp3 = high;
    }

    if (high <= lowTemp3 || lowTemp3 === undefined) {
      lowTemp3 = high;
    }
  }
  // console.log(highTemp3);
  // console.log(lowTemp3);

  for (let i = 24; i < 32; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp4) {
      highTemp4 = high;
    }

    if (high <= lowTemp4 || lowTemp4 === undefined) {
      lowTemp4 = high;
    }
  }
  // console.log(highTemp4);
  // console.log(lowTemp4);

  for (let i = 32; i < 40; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp5) {
      highTemp5 = high;
    }

    if (high <= lowTemp5 || lowTemp5 === undefined) {
      lowTemp5 = high;
    }
  }
  // console.log(highTemp5);
  // console.log(lowTemp5);

  day1Low.textContent = Math.round(lowTemp1) + "°";
  day1High.textContent = Math.round(highTemp1) + "°";

  day2Low.textContent = Math.round(lowTemp2) + "°";
  day2High.textContent = Math.round(highTemp2) + "°";

  day3Low.textContent = Math.round(lowTemp3) + "°";
  day3High.textContent = Math.round(highTemp3) + "°";

  day4Low.textContent = Math.round(lowTemp4) + "°";
  day4High.textContent = Math.round(highTemp4) + "°";

  day5Low.textContent = Math.round(lowTemp5) + "°";
  day5High.textContent = Math.round(highTemp5) + "°";
  // 5 day forecast high and low end

  // console.log(data.list[0].main.temp_min);
  // console.log(data.list[0].main.temp_max);

  // console.log(data.list[1].main.temp_min);
  // console.log(data.list[1].main.temp_max);

  // console.log(data.list[2].main.temp_min);
  // console.log(data.list[2].main.temp_max);

  // console.log(data.list[3].main.temp_min);
  // console.log(data.list[3].main.temp_max);
}

// end of on load code

// search code
async function currentSearchAPI(latitude, longitude) {
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

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.weather[0].description === "clear sky") {
      currentIcon.src = "./assets/01dd.png";
    } else if (data.weather[0].description === "few clouds") {
      currentIcon.src = "./assets/02dd.png";
    } else if (data.weather[0].description === "scattered clouds") {
      currentIcon.src = "./assets/03dd.png";
    } else if (
      data.weather[0].description === "broken clouds" ||
      data.weather[0].description === "overcast clouds"
    ) {
      currentIcon.src = "./assets/04dd.png";
    } else if (data.weather[0].main === "Thunderstorm") {
      currentIcon.src = "./assets/11dd.png";
    } else if (
      data.weather[0].main === "Drizzle" ||
      data.weather[0].main === "Rain"
    ) {
      currentIcon.src = "./assets/09dd.png";
    } else if (data.weather[0].main === "Snow") {
      currentIcon.src = "./assets/13d.png";
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
      currentIcon.src = "./assets/50d.png";
    }
  } else {
    if (data.weather[0].description === "clear sky") {
      currentIcon.src = "./assets/01nn.png";
    } else if (data.weather[0].description === "few clouds") {
      currentIcon.src = "./assets/02nn.png";
    } else if (data.weather[0].description === "scattered clouds") {
      currentIcon.src = "./assets/03dd.png";
    } else if (
      data.weather[0].description === "broken clouds" ||
      data.weather[0].description === "overcast clouds"
    ) {
      currentIcon.src = "./assets/04dd.png";
    } else if (data.weather[0].main === "Thunderstorm") {
      currentIcon.src = "./assets/11dd.png";
    } else if (
      data.weather[0].main === "Drizzle" ||
      data.weather[0].main === "Rain"
    ) {
      currentIcon.src = "./assets/09dd.png";
    } else if (data.weather[0].main === "Snow") {
      currentIcon.src = "./assets/13d.png";
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
      currentIcon.src = "./assets/50d.png";
    }
  }
}

async function forecastSearchAPI(latitude, longitude) {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
  );

  const data = await promise.json();

  // weather start
  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[0].weather[0].description === "clear sky") {
      weather1.src = "./assets/01dd.png";
    } else if (data.list[0].weather[0].description === "few clouds") {
      weather1.src = "./assets/02dd.png";
    } else if (data.list[0].weather[0].description === "scattered clouds") {
      weather1.src = "./assets/03dd.png";
    } else if (
      data.list[0].weather[0].description === "broken clouds" ||
      data.list[0].weather[0].description === "overcast clouds"
    ) {
      weather1.src = "./assets/04dd.png";
    } else if (data.list[0].weather[0].main === "Thunderstorm") {
      weather1.src = "./assets/11dd.png";
    } else if (
      data.list[0].weather[0].main === "Drizzle" ||
      data.list[0].weather[0].main === "Rain"
    ) {
      weather1.src = "./assets/09dd.png";
    } else if (data.list[0].weather[0].main === "Snow") {
      weather1.src = "./assets/13d.png";
    } else if (
      data.list[0].weather[0].main === "Mist" ||
      data.list[0].weather[0].main === "Smoke" ||
      data.list[0].weather[0].main === "Haze" ||
      data.list[0].weather[0].main === "Dust" ||
      data.list[0].weather[0].main === "Fog" ||
      data.list[0].weather[0].main === "Sand" ||
      data.list[0].weather[0].main === "Ash" ||
      data.list[0].weather[0].main === "Squall" ||
      data.list[0].weather[0].main === "Tornado"
    ) {
      weather1.src = "./assets/50d.png";
    }
  } else {
    if (data.list[0].weather[0].description === "clear sky") {
      weather1.src = "./assets/01nn.png";
    } else if (data.list[0].weather[0].description === "few clouds") {
      weather1.src = "./assets/02nn.png";
    } else if (data.list[0].weather[0].description === "scattered clouds") {
      weather1.src = "./assets/03dd.png";
    } else if (
      data.list[0].weather[0].description === "broken clouds" ||
      data.list[0].weather[0].description === "overcast clouds"
    ) {
      weather1.src = "./assets/04dd.png";
    } else if (data.list[0].weather[0].main === "Thunderstorm") {
      weather1.src = "./assets/11dd.png";
    } else if (
      data.list[0].weather[0].main === "Drizzle" ||
      data.list[0].weather[0].main === "Rain"
    ) {
      weather1.src = "./assets/09dd.png";
    } else if (data.list[0].weather[0].main === "Snow") {
      weather1.src = "./assets/13d.png";
    } else if (
      data.list[0].weather[0].main === "Mist" ||
      data.list[0].weather[0].main === "Smoke" ||
      data.list[0].weather[0].main === "Haze" ||
      data.list[0].weather[0].main === "Dust" ||
      data.list[0].weather[0].main === "Fog" ||
      data.list[0].weather[0].main === "Sand" ||
      data.list[0].weather[0].main === "Ash" ||
      data.list[0].weather[0].main === "Squall" ||
      data.list[0].weather[0].main === "Tornado"
    ) {
      weather1.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[8].weather[0].description === "clear sky") {
      weather2.src = "./assets/01dd.png";
    } else if (data.list[8].weather[0].description === "few clouds") {
      weather2.src = "./assets/02dd.png";
    } else if (data.list[8].weather[0].description === "scattered clouds") {
      weather2.src = "./assets/03dd.png";
    } else if (
      data.list[8].weather[0].description === "broken clouds" ||
      data.list[8].weather[0].description === "overcast clouds"
    ) {
      weather2.src = "./assets/04dd.png";
    } else if (data.list[8].weather[0].main === "Thunderstorm") {
      weather2.src = "./assets/11dd.png";
    } else if (
      data.list[8].weather[0].main === "Drizzle" ||
      data.list[8].weather[0].main === "Rain"
    ) {
      weather2.src = "./assets/09dd.png";
    } else if (data.list[8].weather[0].main === "Snow") {
      weather2.src = "./assets/13d.png";
    } else if (
      data.list[8].weather[0].main === "Mist" ||
      data.list[8].weather[0].main === "Smoke" ||
      data.list[8].weather[0].main === "Haze" ||
      data.list[8].weather[0].main === "Dust" ||
      data.list[8].weather[0].main === "Fog" ||
      data.list[8].weather[0].main === "Sand" ||
      data.list[8].weather[0].main === "Ash" ||
      data.list[8].weather[0].main === "Squall" ||
      data.list[8].weather[0].main === "Tornado"
    ) {
      weather2.src = "./assets/50d.png";
    }
  } else {
    if (data.list[8].weather[0].description === "clear sky") {
      weather2.src = "./assets/01nn.png";
    } else if (data.list[8].weather[0].description === "few clouds") {
      weather2.src = "./assets/02nn.png";
    } else if (data.list[8].weather[0].description === "scattered clouds") {
      weather2.src = "./assets/03dd.png";
    } else if (
      data.list[8].weather[0].description === "broken clouds" ||
      data.list[8].weather[0].description === "overcast clouds"
    ) {
      weather2.src = "./assets/04dd.png";
    } else if (data.list[8].weather[0].main === "Thunderstorm") {
      weather2.src = "./assets/11dd.png";
    } else if (
      data.list[8].weather[0].main === "Drizzle" ||
      data.list[8].weather[0].main === "Rain"
    ) {
      weather2.src = "./assets/09dd.png";
    } else if (data.list[8].weather[0].main === "Snow") {
      weather2.src = "./assets/13d.png";
    } else if (
      data.list[8].weather[0].main === "Mist" ||
      data.list[8].weather[0].main === "Smoke" ||
      data.list[8].weather[0].main === "Haze" ||
      data.list[8].weather[0].main === "Dust" ||
      data.list[8].weather[0].main === "Fog" ||
      data.list[8].weather[0].main === "Sand" ||
      data.list[8].weather[0].main === "Ash" ||
      data.list[8].weather[0].main === "Squall" ||
      data.list[8].weather[0].main === "Tornado"
    ) {
      weather2.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[16].weather[0].description === "clear sky") {
      weather3.src = "./assets/01dd.png";
    } else if (data.list[16].weather[0].description === "few clouds") {
      weather3.src = "./assets/02dd.png";
    } else if (data.list[16].weather[0].description === "scattered clouds") {
      weather3.src = "./assets/03dd.png";
    } else if (
      data.list[16].weather[0].description === "broken clouds" ||
      data.list[16].weather[0].description === "overcast clouds"
    ) {
      weather3.src = "./assets/04dd.png";
    } else if (data.list[16].weather[0].main === "Thunderstorm") {
      weather3.src = "./assets/11dd.png";
    } else if (
      data.list[16].weather[0].main === "Drizzle" ||
      data.list[16].weather[0].main === "Rain"
    ) {
      weather3.src = "./assets/09dd.png";
    } else if (data.list[16].weather[0].main === "Snow") {
      weather3.src = "./assets/13d.png";
    } else if (
      data.list[16].weather[0].main === "Mist" ||
      data.list[16].weather[0].main === "Smoke" ||
      data.list[16].weather[0].main === "Haze" ||
      data.list[16].weather[0].main === "Dust" ||
      data.list[16].weather[0].main === "Fog" ||
      data.list[16].weather[0].main === "Sand" ||
      data.list[16].weather[0].main === "Ash" ||
      data.list[16].weather[0].main === "Squall" ||
      data.list[16].weather[0].main === "Tornado"
    ) {
      weather3.src = "./assets/50d.png";
    }
  } else {
    if (data.list[16].weather[0].description === "clear sky") {
      weather3.src = "./assets/01nn.png";
    } else if (data.list[16].weather[0].description === "few clouds") {
      weather3.src = "./assets/02nn.png";
    } else if (data.list[16].weather[0].description === "scattered clouds") {
      weather3.src = "./assets/03dd.png";
    } else if (
      data.list[16].weather[0].description === "broken clouds" ||
      data.list[16].weather[0].description === "overcast clouds"
    ) {
      weather3.src = "./assets/04dd.png";
    } else if (data.list[16].weather[0].main === "Thunderstorm") {
      weather3.src = "./assets/11dd.png";
    } else if (
      data.list[16].weather[0].main === "Drizzle" ||
      data.list[16].weather[0].main === "Rain"
    ) {
      weather3.src = "./assets/09dd.png";
    } else if (data.list[16].weather[0].main === "Snow") {
      weather3.src = "./assets/13d.png";
    } else if (
      data.list[16].weather[0].main === "Mist" ||
      data.list[16].weather[0].main === "Smoke" ||
      data.list[16].weather[0].main === "Haze" ||
      data.list[16].weather[0].main === "Dust" ||
      data.list[16].weather[0].main === "Fog" ||
      data.list[16].weather[0].main === "Sand" ||
      data.list[16].weather[0].main === "Ash" ||
      data.list[16].weather[0].main === "Squall" ||
      data.list[16].weather[0].main === "Tornado"
    ) {
      weather3.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[24].weather[0].description === "clear sky") {
      weather4.src = "./assets/01dd.png";
    } else if (data.list[24].weather[0].description === "few clouds") {
      weather4.src = "./assets/02dd.png";
    } else if (data.list[24].weather[0].description === "scattered clouds") {
      weather4.src = "./assets/03dd.png";
    } else if (
      data.list[24].weather[0].description === "broken clouds" ||
      data.list[24].weather[0].description === "overcast clouds"
    ) {
      weather4.src = "./assets/04dd.png";
    } else if (data.list[24].weather[0].main === "Thunderstorm") {
      weather4.src = "./assets/11dd.png";
    } else if (
      data.list[24].weather[0].main === "Drizzle" ||
      data.list[24].weather[0].main === "Rain"
    ) {
      weather4.src = "./assets/09dd.png";
    } else if (data.list[24].weather[0].main === "Snow") {
      weather4.src = "./assets/13d.png";
    } else if (
      data.list[24].weather[0].main === "Mist" ||
      data.list[24].weather[0].main === "Smoke" ||
      data.list[24].weather[0].main === "Haze" ||
      data.list[24].weather[0].main === "Dust" ||
      data.list[24].weather[0].main === "Fog" ||
      data.list[24].weather[0].main === "Sand" ||
      data.list[24].weather[0].main === "Ash" ||
      data.list[24].weather[0].main === "Squall" ||
      data.list[24].weather[0].main === "Tornado"
    ) {
      weather4.src = "./assets/50d.png";
    }
  } else {
    if (data.list[24].weather[0].description === "clear sky") {
      weather4.src = "./assets/01nn.png";
    } else if (data.list[24].weather[0].description === "few clouds") {
      weather4.src = "./assets/02nn.png";
    } else if (data.list[24].weather[0].description === "scattered clouds") {
      weather4.src = "./assets/03dd.png";
    } else if (
      data.list[24].weather[0].description === "broken clouds" ||
      data.list[24].weather[0].description === "overcast clouds"
    ) {
      weather4.src = "./assets/04dd.png";
    } else if (data.list[24].weather[0].main === "Thunderstorm") {
      weather4.src = "./assets/11dd.png";
    } else if (
      data.list[24].weather[0].main === "Drizzle" ||
      data.list[24].weather[0].main === "Rain"
    ) {
      weather4.src = "./assets/09dd.png";
    } else if (data.list[24].weather[0].main === "Snow") {
      weather4.src = "./assets/13d.png";
    } else if (
      data.list[24].weather[0].main === "Mist" ||
      data.list[24].weather[0].main === "Smoke" ||
      data.list[24].weather[0].main === "Haze" ||
      data.list[24].weather[0].main === "Dust" ||
      data.list[24].weather[0].main === "Fog" ||
      data.list[24].weather[0].main === "Sand" ||
      data.list[24].weather[0].main === "Ash" ||
      data.list[24].weather[0].main === "Squall" ||
      data.list[24].weather[0].main === "Tornado"
    ) {
      weather4.src = "./assets/50d.png";
    }
  }

  if (t.getHours() >= 7 && t.getHours() <= 18) {
    if (data.list[32].weather[0].description === "clear sky") {
      weather5.src = "./assets/01dd.png";
    } else if (data.list[32].weather[0].description === "few clouds") {
      weather5.src = "./assets/02dd.png";
    } else if (data.list[32].weather[0].description === "scattered clouds") {
      weather5.src = "./assets/03dd.png";
    } else if (
      data.list[32].weather[0].description === "broken clouds" ||
      data.list[32].weather[0].description === "overcast clouds"
    ) {
      weather5.src = "./assets/04dd.png";
    } else if (data.list[32].weather[0].main === "Thunderstorm") {
      weather5.src = "./assets/11dd.png";
    } else if (
      data.list[32].weather[0].main === "Drizzle" ||
      data.list[32].weather[0].main === "Rain"
    ) {
      weather5.src = "./assets/09dd.png";
    } else if (data.list[32].weather[0].main === "Snow") {
      weather5.src = "./assets/13d.png";
    } else if (
      data.list[32].weather[0].main === "Mist" ||
      data.list[32].weather[0].main === "Smoke" ||
      data.list[32].weather[0].main === "Haze" ||
      data.list[32].weather[0].main === "Dust" ||
      data.list[32].weather[0].main === "Fog" ||
      data.list[32].weather[0].main === "Sand" ||
      data.list[32].weather[0].main === "Ash" ||
      data.list[32].weather[0].main === "Squall" ||
      data.list[32].weather[0].main === "Tornado"
    ) {
      weather5.src = "./assets/50d.png";
    }
  } else {
    if (data.list[32].weather[0].description === "clear sky") {
      weather5.src = "./assets/01nn.png";
    } else if (data.list[32].weather[0].description === "few clouds") {
      weather5.src = "./assets/02nn.png";
    } else if (data.list[32].weather[0].description === "scattered clouds") {
      weather5.src = "./assets/03dd.png";
    } else if (
      data.list[32].weather[0].description === "broken clouds" ||
      data.list[32].weather[0].description === "overcast clouds"
    ) {
      weather5.src = "./assets/04dd.png";
    } else if (data.list[32].weather[0].main === "Thunderstorm") {
      weather5.src = "./assets/11dd.png";
    } else if (
      data.list[32].weather[0].main === "Drizzle" ||
      data.list[32].weather[0].main === "Rain"
    ) {
      weather5.src = "./assets/09dd.png";
    } else if (data.list[32].weather[0].main === "Snow") {
      weather5.src = "./assets/13d.png";
    } else if (
      data.list[32].weather[0].main === "Mist" ||
      data.list[32].weather[0].main === "Smoke" ||
      data.list[32].weather[0].main === "Haze" ||
      data.list[32].weather[0].main === "Dust" ||
      data.list[32].weather[0].main === "Fog" ||
      data.list[32].weather[0].main === "Sand" ||
      data.list[32].weather[0].main === "Ash" ||
      data.list[32].weather[0].main === "Squall" ||
      data.list[32].weather[0].main === "Tornado"
    ) {
      weather5.src = "./assets/50d.png";
    }
  }
  // weather end

  // 5 day forecast high and low start
  for (let i = 0; i < 8; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp1) {
      highTemp1 = high;
    }

    if (high <= lowTemp1 || lowTemp1 === undefined) {
      lowTemp1 = high;
    }
  }
  // console.log(highTemp1);
  // console.log(lowTemp1);

  for (let i = 8; i < 16; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp2) {
      highTemp2 = high;
    }

    if (high <= lowTemp2 || lowTemp2 === undefined) {
      lowTemp2 = high;
    }
  }
  // console.log(highTemp2);
  // console.log(lowTemp2);

  for (let i = 16; i < 24; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp3) {
      highTemp3 = high;
    }

    if (high <= lowTemp3 || lowTemp3 === undefined) {
      lowTemp3 = high;
    }
  }
  // console.log(highTemp3);
  // console.log(lowTemp3);

  for (let i = 24; i < 32; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp4) {
      highTemp4 = high;
    }

    if (high <= lowTemp4 || lowTemp4 === undefined) {
      lowTemp4 = high;
    }
  }
  // console.log(highTemp4);
  // console.log(lowTemp4);

  for (let i = 32; i < 40; i++) {
    // console.log(data.list[i].main.temp_max);
    let high = data.list[i].main.temp_max;

    if (high >= highTemp5) {
      highTemp5 = high;
    }

    if (high <= lowTemp5 || lowTemp5 === undefined) {
      lowTemp5 = high;
    }
  }
  // console.log(highTemp5);
  // console.log(lowTemp5);

  day1Low.textContent = Math.round(lowTemp1) + "°";
  day1High.textContent = Math.round(highTemp1) + "°";

  day2Low.textContent = Math.round(lowTemp2) + "°";
  day2High.textContent = Math.round(highTemp2) + "°";

  day3Low.textContent = Math.round(lowTemp3) + "°";
  day3High.textContent = Math.round(highTemp3) + "°";

  day4Low.textContent = Math.round(lowTemp4) + "°";
  day4High.textContent = Math.round(highTemp4) + "°";

  day5Low.textContent = Math.round(lowTemp5) + "°";
  day5High.textContent = Math.round(highTemp5) + "°";
  // 5 day forecast high and low end
}

async function locationName(input) {
  const promise = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`
  );

  const data = await promise.json();

  favoriteCity=data[0].name

  if(savedFavorites.includes(favoriteCity)){
    favoriteBtn.src = "./assets/favorited.png"
    favoriteBtnColor.className = "BtnFavorite2";
  }else{
    favoriteBtn.src = "./assets/1e124fac-ffe5-4d0b-af1b-4990f9090e40.png"
    favoriteBtnColor.className = "BtnFavorite";
  }

  console.log("Searched city: " + data[0].name);
  console.log("Searched lat: " + data[0].lat);
  console.log("Search lon: " + data[0].lon);
  currentSearchAPI(data[0].lat, data[0].lon);
  forecastSearchAPI(data[0].lat, data[0].lon);

  if (data[0].state === "Alabama") {
    location.textContent = data[0].name.toUpperCase() + ", AL";
  } else if (data[0].state === "Alaska") {
    location.textContent = data[0].name.toUpperCase() + ", AK";
  } else if (data[0].state === "Arizona") {
    location.textContent = data[0].name.toUpperCase() + ", AZ";
  } else if (data[0].state === "Arkansas") {
    location.textContent = data[0].name.toUpperCase() + ", AR";
  } else if (data[0].state === "California") {
    location.textContent = data[0].name.toUpperCase() + ", CA";
  } else if (data[0].state === "Colorado") {
    location.textContent = data[0].name.toUpperCase() + ", CO";
  } else if (data[0].state === "Conneticut") {
    location.textContent = data[0].name.toUpperCase() + ", CT";
  } else if (data[0].state === "District of Columbia") {
    location.textContent = data[0].name.toUpperCase() + ", DC";
  } else if (data[0].state === "Delaware") {
    location.textContent = data[0].name.toUpperCase() + ", DE";
  } else if (data[0].state === "Florida") {
    location.textContent = data[0].name.toUpperCase() + ", FL";
  } else if (data[0].state === "Georgia") {
    location.textContent = data[0].name.toUpperCase() + ", GA";
  } else if (data[0].state === "Hawaii") {
    location.textContent = data[0].name.toUpperCase() + ", HI";
  } else if (data[0].state === "Idaho") {
    location.textContent = data[0].name.toUpperCase() + ", ID";
  } else if (data[0].state === "Illinois") {
    location.textContent = data[0].name.toUpperCase() + ", IL";
  } else if (data[0].state === "Indiana") {
    location.textContent = data[0].name.toUpperCase() + ", IN";
  } else if (data[0].state === "Iowa") {
    location.textContent = data[0].name.toUpperCase() + ", IA";
  } else if (data[0].state === "Kansas") {
    location.textContent = data[0].name.toUpperCase() + ", KS";
  } else if (data[0].state === "Kentucky") {
    location.textContent = data[0].name.toUpperCase() + ", KY";
  } else if (data[0].state === "Louisiana") {
    location.textContent = data[0].name.toUpperCase() + ", LA";
  } else if (data[0].state === "Maine") {
    location.textContent = data[0].name.toUpperCase() + ", ME";
  } else if (data[0].state === "Maryland") {
    location.textContent = data[0].name.toUpperCase() + ", MD";
  } else if (data[0].state === "Massachusetts") {
    location.textContent = data[0].name.toUpperCase() + ", MA";
  } else if (data[0].state === "Michigan") {
    location.textContent = data[0].name.toUpperCase() + ", MI";
  } else if (data[0].state === "Minnesota") {
    location.textContent = data[0].name.toUpperCase() + ", MN";
  } else if (data[0].state === "Mississippi") {
    location.textContent = data[0].name.toUpperCase() + ", MS";
  } else if (data[0].state === "Missouri") {
    location.textContent = data[0].name.toUpperCase() + ", MO";
  } else if (data[0].state === "Montana") {
    location.textContent = data[0].name.toUpperCase() + ", MT";
  } else if (data[0].state === "Nebraska") {
    location.textContent = data[0].name.toUpperCase() + ", NE";
  } else if (data[0].state === "Nevada") {
    location.textContent = data[0].name.toUpperCase() + ", NV";
  } else if (data[0].state === "New Hampshire") {
    location.textContent = data[0].name.toUpperCase() + ", NH";
  } else if (data[0].state === "New Jersey") {
    location.textContent = data[0].name.toUpperCase() + ", NJ";
  } else if (data[0].state === "New Mexico") {
    location.textContent = data[0].name.toUpperCase() + ", NM";
  } else if (data[0].state === "New York") {
    location.textContent = data[0].name.toUpperCase() + ", NY";
  } else if (data[0].state === "North Carolina") {
    location.textContent = data[0].name.toUpperCase() + ", NC";
  } else if (data[0].state === "North Dakota") {
    location.textContent = data[0].name.toUpperCase() + ", ND";
  } else if (data[0].state === "Ohio") {
    location.textContent = data[0].name.toUpperCase() + ", OH";
  } else if (data[0].state === "Oklahoma") {
    location.textContent = data[0].name.toUpperCase() + ", OK";
  } else if (data[0].state === "Oregon") {
    location.textContent = data[0].name.toUpperCase() + ", OR";
  } else if (data[0].state === "Pennsylvania") {
    location.textContent = data[0].name.toUpperCase() + ", PA";
  } else if (data[0].state === "Rhode Island") {
    location.textContent = data[0].name.toUpperCase() + ", RI";
  } else if (data[0].state === "South Carolina") {
    location.textContent = data[0].name.toUpperCase() + ", SC";
  } else if (data[0].state === "South Dakota") {
    location.textContent = data[0].name.toUpperCase() + ", SD";
  } else if (data[0].state === "Tennessee") {
    location.textContent = data[0].name.toUpperCase() + ", TN";
  } else if (data[0].state === "Texas") {
    location.textContent = data[0].name.toUpperCase() + ", TX";
  } else if (data[0].state === "Utah") {
    location.textContent = data[0].name.toUpperCase() + ", UT";
  } else if (data[0].state === "Vermont") {
    location.textContent = data[0].name.toUpperCase() + ", VT";
  } else if (data[0].state === "Virginia") {
    location.textContent = data[0].name.toUpperCase() + ", VA";
  } else if (data[0].state === "Washington") {
    location.textContent = data[0].name.toUpperCase() + ", WA";
  } else if (data[0].state === "West Virginia") {
    location.textContent = data[0].name.toUpperCase() + ", WV";
  } else if (data[0].state === "Wisconsin") {
    location.textContent = data[0].name.toUpperCase() + ", WI";
  } else if (data[0].state === "Wyoming") {
    location.textContent = data[0].name.toUpperCase() + ", WY";
  } else {
    location.textContent = data[0].name.toUpperCase() + ", " + data[0].country;
  }
}

// end of search code

// creating elements
function CreatingElements() {
let mainDiv = document.createElement("div");
mainDiv.className = "col-3 d-flex justify-content-center";
mainDiv.style.marginBottom = "4%";

let cardDiv = document.createElement("div");
cardDiv.id = "favoritesBoxes";
cardDiv.className = "card fiveDayBox";
cardDiv.style.width = "325px";
cardDiv.style.height = "348px";

let cardBodyDiv = document.createElement("div");
cardBodyDiv.className = "card-body";

let locationParagraph = document.createElement("p");
locationParagraph.className = "font1 lh-1";
locationParagraph.style.fontSize = "30px";
locationParagraph.style.marginTop = "4%";
locationParagraph.style.marginLeft = "3%";
locationParagraph.style.marginRight = "20%";
locationParagraph.textContent = "SAN JOSE, CA";

let deleteImage = document.createElement("img");
deleteImage.style.position = "absolute";
deleteImage.style.top = "18px";
deleteImage.style.right = "14px";
deleteImage.src = "../assets/delete.png";
deleteImage.alt = "";

deleteImage.addEventListener("click", function(e) {
  
})

let firstRowDiv = document.createElement("div");
firstRowDiv.className = "row";

let leftColumnDiv = document.createElement("div");
leftColumnDiv.className = "col-6 d-flex justify-content-start";
leftColumnDiv.style.height = "170px";

let imageLeftColumn = document.createElement("img");
imageLeftColumn.src = "../assets/01nn.png";
imageLeftColumn.alt = "";

let rightColumnDiv = document.createElement("div");
rightColumnDiv.className = "col-6 currentTempFont";
rightColumnDiv.style.fontSize = "60px";
rightColumnDiv.style.marginTop = "18%";
rightColumnDiv.textContent = "42°";

mainDiv.appendChild(cardDiv);
cardDiv.appendChild(cardBodyDiv);
cardBodyDiv.appendChild(locationParagraph);
cardBodyDiv.appendChild(deleteImage);
cardBodyDiv.appendChild(firstRowDiv);
firstRowDiv.appendChild(leftColumnDiv);
leftColumnDiv.appendChild(imageLeftColumn);
firstRowDiv.appendChild(rightColumnDiv);

let secondRowDiv = document.createElement("div");
secondRowDiv.className = "row";

let leftColumnLowDiv = document.createElement("div");
leftColumnLowDiv.className = "col";

let lowRowDiv = document.createElement("div");
lowRowDiv.className = "row font1";
lowRowDiv.style.fontSize = "25px";
lowRowDiv.style.marginLeft = "40%";
lowRowDiv.textContent = "LOW:";

let lowTemperatureDiv = document.createElement("div");
lowTemperatureDiv.className = "row font3 lh-1";
lowTemperatureDiv.style.fontSize = "30px";
lowTemperatureDiv.style.marginLeft = "38%";
lowTemperatureDiv.textContent = "45°";

let middleColumnDiv = document.createElement("div");
middleColumnDiv.className = "col";

let temperatureDiv = document.createElement("div");
temperatureDiv.className = "temperature";
temperatureDiv.style.marginTop = "47%";

let rightColumnHighDiv = document.createElement("div");
rightColumnHighDiv.className = "col";

let highRowDiv = document.createElement("div");
highRowDiv.className = "row d-flex justify-content-end font1";
highRowDiv.style.fontSize = "25px";
highRowDiv.style.marginRight = "16%";
highRowDiv.textContent = "HIGH:";

let highTemperatureDiv = document.createElement("div");
highTemperatureDiv.id = "day1High";
highTemperatureDiv.className = "row d-flex justify-content-end font3 lh-1";
highTemperatureDiv.style.fontSize = "30px";
highTemperatureDiv.style.marginRight = "25%";
highTemperatureDiv.textContent = "68°";

secondRowDiv.appendChild(leftColumnLowDiv);
leftColumnLowDiv.appendChild(lowRowDiv);
leftColumnLowDiv.appendChild(lowTemperatureDiv);
secondRowDiv.appendChild(middleColumnDiv);
middleColumnDiv.appendChild(temperatureDiv);
secondRowDiv.appendChild(rightColumnHighDiv);
rightColumnHighDiv.appendChild(highRowDiv);
rightColumnHighDiv.appendChild(highTemperatureDiv);

cardBodyDiv.appendChild(secondRowDiv);

if(favorites){
injectFavorite.appendChild(mainDiv);
}
}
// creating elements end

CreatingElements();

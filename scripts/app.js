import {apiKey} from "./apikey.js"

async function weatherAPI() {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-121.478851&lon=38.575764&appid=${apiKey}`);

  const data = await promise.json();


}

weatherAPI();
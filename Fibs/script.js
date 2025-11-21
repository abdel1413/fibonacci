// const fibonacci = (array, length) => {
//     if(length ===0) return [];
//     if(length ===1) return array[0];
//     let newArray = [...array];
//     for(let i = array.length; i < length; i++){

//         newArray[i] = newArray[i-1] + newArray[i-2];
//     }

//     return newArray;
// }

// console.log(fibonacci([0,1],0));
// console.log(fibonacci([0,1],1));
// console.log(fibonacci([0,1],2));
// console.log(fibonacci([0,1],3));
// console.log(fibonacci([0,1],8));
// const tribonacci = (array, length) => {
//     if(length ===0) return [];
//     if(length === 1) return array[0]
//     if(length ===2) return array[1]
//     let newArray = [...array];
//     for(let i = array.length; i < length; i++){
//         newArray[i] = newArray[i-1] + newArray[i-2] + newArray[i-3];
//     }
    
// }



const API_KEY = 'd1e34c8fe7600f6587b90b8e32c0f5f8'

let isCelsius = true;

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
document.getElementById('toggleTempBtn').addEventListener('click', toggleTemperature);

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod !== 200) {
    document.getElementById('weatherInfo').innerText = 'City not found!';
    return;
  }

  const temp = data.main.temp;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  const lat = data.coord.lat;
  const lon = data.coord.lon;

  console.log("lon", lon, 'lat, ', lat)
  console.log('des',description)
  document.getElementById('weatherInfo').innerHTML = `
    <h2>${data.name}</h2>
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    <p><span id="tempValue">${temp}</span> °C</p>
    <p>${description}</p>
  `;

  // Load hourly forecast
  getHourlyForecast(lat, lon);
}

async function getHourlyForecast(lat, lon) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lon}&lon=${lat}&exclude=current,minutely,daily,alerts&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log("data",data)

  const hourly = data.hourly.slice(0, 12); // next 12 hours
  

  const forecastContainer = document.getElementById('hourlyForecast');
  forecastContainer.innerHTML = '';

  hourly.forEach(hour => {
    const date = new Date(hour.dt * 1000);
    const hours = date.getHours();
    const icon = hour.weather[0].icon;
    const temp = hour.temp;

    const item = document.createElement('div');
    item.className = 'forecast-item';
    item.innerHTML = `
      <p>${hours}:00</p>
      <img src="http://openweathermap.org/img/wn/${icon}.png" alt="">
      <p><span class="forecast-temp">${temp.toFixed(1)}</span> °C</p>
    `;
    forecastContainer.appendChild(item);
  });
}

function toggleTemperature() {
  const toggleBtn = document.getElementById('toggleTempBtn');
  const tempValue = document.getElementById('tempValue');
  const forecastTemps = document.querySelectorAll('.forecast-temp');

  if (!tempValue) return;

  if (isCelsius) {
    // Convert to Fahrenheit
    const f = (parseFloat(tempValue.innerText) * 9/5) + 32;
    tempValue.innerText = f.toFixed(1);

    forecastTemps.forEach(el => {
      const c = parseFloat(el.innerText);
      el.innerText = ((c * 9/5) + 32).toFixed(1);
    });

    toggleBtn.innerText = 'Switch to °C';
  } else {
    // Convert to Celsius
    const c = (parseFloat(tempValue.innerText) - 32) * 5/9;
    tempValue.innerText = c.toFixed(1);

    forecastTemps.forEach(el => {
      const f = parseFloat(el.innerText);
      el.innerText = ((f - 32) * 5/9).toFixed(1);
    });

    toggleBtn.innerText = 'Switch to °F';
  }

  isCelsius = !isCelsius;
}

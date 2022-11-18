function currentDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}
function showTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#date").innerHTML = currentDate(
    response.data.dt * 1000
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  celsiusTemperature = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = celsiusTemperature;
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function retrieveCity(city) {
  let apiKey = "34f6f9ebebdb251a42cde086a06a5eee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
//
function findCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city_input");
  retrieveCity(city.value);
}
function showFarenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  let farenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temp.innerHTML = Math.round(farenheitTemp);
}
function showCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = celsiusTemperature;
}

let celsiusTemperature = null;

let farenheit = document.querySelector("#farenheit_link");
farenheit.addEventListener("click", showFarenheit);

let celsius = document.querySelector("#celsius_link");
celsius.addEventListener("click", showCelsius);

let form = document.querySelector("#search_form");
form.addEventListener("submit", findCity);

retrieveCity("Kenya");

function showTemperature(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
let apiKey = "34f6f9ebebdb251a42cde086a06a5eee";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kenya&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);

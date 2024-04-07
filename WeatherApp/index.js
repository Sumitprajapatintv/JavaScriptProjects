console.log("Hello");
let cityName;
let inputBtn = document.querySelector(".inputSection button");
cityName = document.querySelector(".inputSection input");
console.log("object", cityName.value);

inputBtn.addEventListener("click", () => {
  getData(cityName.value);
});
async function getData(cityName) {
  console.log("CityNAme", cityName);
  const APIKEY = "95f2468779f4d70e54fd8e5868814263";
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=95f2468779f4d70e54fd8e5868814263`
  );
  console.log("data", data.status);
  if (data.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".whether").style.display = "none";
  } else {
    document.querySelector(".whether").style.display = "block";
    document.querySelector(".error").style.display = "none";
    const result = await data.json();

    console.log(result);
    console.log(result.weather[0].main);
    if (result.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "./img/sun.png";
    } else if (result.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "./img/cloudy.png";
    } else if (result.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "./img/cloudy.png";
    } else if (result.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "./img/rainy.png";
    }

    document.querySelector(".whether h1").innerHTML =
      Math.round(result.main.temp - 273) + "°C  ";

    document.querySelector(".whether h2").innerHTML = result.name;

    document.querySelector(".whether h2").innerHTML = result.name;

    document.querySelector(".whether .humidity").innerHTML =
      result.main.humidity + "°C  ";

    document.querySelector(".whether .wind").innerHTML =
      result.wind.speed + "km/h";
  }
}

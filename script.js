const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd54d78417mshe015abefd390481p14c74fjsn3ca86d91bf1c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");

const getCityWeather = (city) => {
  document.querySelector(".text-start");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct3.innerHTML = response.cloud_pct;
      temp3.innerHTML = response.temp;
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      min_temp3.innerHTML = response.min_temp;
      max_temp3.innerHTML = response.max_temp;
      wind_speed3.innerHTML = response.wind_speed;
      wind_degrees3.innerHTML = response.wind_degrees;
      sunrise3.innerHTML = response.sunrise;
      sunset3.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
getCityWeather(city.value);

const getCityWeather2 = (city) => {
  document.querySelector(".text-start");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct4.innerHTML = response.cloud_pct;
      feels_like4.innerHTML = response.feels_like;
      humidity4.innerHTML = response.humidity;
      max_temp4.innerHTML = response.max_temp;
      min_temp4.innerHTML = response.min_temp;
      sunrise4.innerHTML = response.sunrise;
      sunset4.innerHTML = response.sunset;
      temp4.innerHTML = response.temp;
      wind_degrees4.innerHTML = response.wind_degrees;
      wind_speed4.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
getCityWeather2(city.value);

const getCityWeather3 = (city) => {
  document.querySelector(".text-start");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct5.innerHTML = response.cloud_pct;
      feels_like5.innerHTML = response.feels_like;
      humidity5.innerHTML = response.humidity;
      max_temp5.innerHTML = response.max_temp;
      min_temp5.innerHTML = response.min_temp;
      sunrise5.innerHTML = response.sunrise;
      sunset5.innerHTML = response.sunset;
      temp5.innerHTML = response.temp;
      wind_degrees5.innerHTML = response.wind_degrees;
      wind_speed5.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
getCityWeather3(city.value);

const getCityWeather4 = (city) => {
  document.querySelector(".text-start");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct6.innerHTML = response.cloud_pct;
      feels_like6.innerHTML = response.feels_like;
      humidity6.innerHTML = response.humidity;
      max_temp6.innerHTML = response.max_temp;
      min_temp6.innerHTML = response.min_temp;
      sunrise6.innerHTML = response.sunrise;
      sunset6.innerHTML = response.sunset;
      temp6.innerHTML = response.temp;
      wind_degrees6.innerHTML = response.wind_degrees;
      wind_speed6.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
getCityWeather4(city.value);

const getCityWeather5 = (city) => {
  document.querySelector(".text-start");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct7.innerHTML = response.cloud_pct;
      feels_like7.innerHTML = response.feels_like;
      humidity7.innerHTML = response.humidity;
      max_temp7.innerHTML = response.max_temp;
      min_temp7.innerHTML = response.min_temp;
      sunrise7.innerHTML = response.sunrise;
      sunset7.innerHTML = response.sunset;
      temp7.innerHTML = response.temp;
      wind_degrees7.innerHTML = response.wind_degrees;
      wind_speed7.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
getCityWeather5(city.value);


const getCityWeather6 = (city) => {
  document.querySelector(".text-start");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct8.innerHTML = response.cloud_pct;
      feels_like8.innerHTML = response.feels_like;
      humidity8.innerHTML = response.humidity;
      max_temp8.innerHTML = response.max_temp;
      min_temp8.innerHTML = response.min_temp;
      sunrise8.innerHTML = response.sunrise;
      sunset8.innerHTML = response.sunset;
      temp8.innerHTML = response.temp;
      wind_degrees8.innerHTML = response.wind_degrees;
      wind_speed8.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
getCityWeather6(city.value);

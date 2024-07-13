import React, { useEffect, useState } from "react";
import { getDistance, convertDistance } from "geolib";

import { Country, State, City } from "country-state-city";

function WeatherApp() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);

      console.log("hello");
    } else {
      console.log("Geolocation not supported");
    }
  }

  console.log(Country.getAllCountries());


  const dis = getDistance(
    { latitude: 51.5103, longitude: 7.49347 },
    { latitude: 6.4474, longitude: 3.3903 }
  );

  const con = convertDistance(dis, "km");

  console.log(con);

  useEffect(() => {
    handleLocationClick();
  }, []);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3b6cb4536a3f0c99e3d357906ad951f9&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div className="bg-white w-[80vw] mx-auto h-[100vh] text-black mt-20">
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <div>
          <p></p>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherApp;

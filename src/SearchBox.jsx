import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  const URL = "https://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "51e937bf48992a6528dc9a65af14812f";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    const { lat, lon } = jsonResponse[0];
    let latitude = lat;
    let longitude = lon;
    let weather = await fetch(
      `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    let weatherResponse = await weather.json();
    let results = {
      city: city,
      temp: weatherResponse.main.temp,
      tempMin: weatherResponse.main.temp_min,
      tempMax: weatherResponse.main.temp_max,
      humidity: weatherResponse.main.humidity,
      feelsLike: weatherResponse.main.feels_like,
      weather: weatherResponse.weather[0].description,
    };
    console.log(results);
    return results;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    setCity("");
  };

  return (
    <div className="searchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          name="city"
          label="Search any city"
          value={city}
          variant="outlined"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

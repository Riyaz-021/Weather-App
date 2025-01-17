import { useState } from "react";
import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    City: "Benagluru",
    feelsLike: 20.4,
    humidity: 85,
    temp: 19.4,
    tempMax: 24,
    tempMin: 17,
    weather: "mist",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

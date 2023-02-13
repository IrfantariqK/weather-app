import { useState } from "react";
import '../public/styles.css'


export default function WeatherApp() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      ).then((res) => res.json());

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for a location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.main && (
        <div className="weather-card">
          <h2 className="weather-location">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="weather-description">{weather.weather[0].description}</p>
          <p className="weather-temperature">{Math.round(weather.main.temp)}°C</p>
        </div>
      )}
    </div>
  );
}

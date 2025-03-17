import React, { useState } from "react";
import useWeatherStore from "../stores/useWeatherStore";

const WeatherCheck = () => {
  const { fetchWeather, weatherData, error } = useWeatherStore();
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) fetchWeather(location);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Check Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys?.country}
          </h2>
          <p>{weatherData.weather?.[0]?.description}</p>
          <p>🌡 Temp: {weatherData.main?.temp}°C</p>
          <p>💨 Wind: {weatherData.wind?.speed} m/s</p>
        </div>
      )}
    </>
  );
};

export default WeatherCheck;

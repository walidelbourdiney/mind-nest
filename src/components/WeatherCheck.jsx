import React, { useState, useEffect } from "react";
import useWeatherStore from "../stores/useWeatherStore";

const WeatherCheck = () => {
  const { fetchWeather, weatherData, error } = useWeatherStore();
  const [location, setLocation] = useState("");
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (weatherData) {
      setIsBouncing(true);
      const timer = setTimeout(() => {
        setIsBouncing(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [weatherData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) fetchWeather(location);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mx-auto  container justify-center mt-2"
      >
        <input
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-r-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="submit"
        >
          Check Weather
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div
          className={`flex mx-auto  container justify-center mt-2 flex-col items-center ${
            isBouncing ? "animate-bounce" : ""
          } ease-in-out`}
        >
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

// Extract values
// const city = weatherData.name; // "London"
// const country = weatherData.sys.country; // "GB"
// const temperature = weatherData.main.temp; // 20.32°C
// const feelsLike = weatherData.main.feels_like; // 19.85°C
// const tempMin = weatherData.main.temp_min; // 19.44°C
// const tempMax = weatherData.main.temp_max; // 21.11°C
// const humidity = weatherData.main.humidity; // 56%
// const pressure = weatherData.main.pressure; // 1012 hPa
// const windSpeed = weatherData.wind.speed; // 3.6 m/s
// const windDirection = weatherData.wind.deg; // 250°
// const visibility = weatherData.visibility; // 10000 meters
// const description = weatherData.weather[0].description; // "clear sky"
// const iconCode = weatherData.weather[0].icon; // "01d"
// const sunrise = weatherData.sys.sunrise; // 1684895634 (Unix Timestamp)
// const sunset = weatherData.sys.sunset; // 1684950012 (Unix Timestamp)
// const cloudiness = weatherData.clouds.all; // 0%

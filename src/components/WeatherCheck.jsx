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

  function displayEmoji(weatherId) {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "⛈"; // Thunderstorm
      case weatherId >= 300 && weatherId < 400:
        return "🌧"; // Drizzle
      case weatherId >= 500 && weatherId < 600:
        return "🌧"; // Rain
      case weatherId >= 600 && weatherId < 700:
        return "❄"; // Snow
      case weatherId >= 700 && weatherId < 800:
        return "🌫"; // Atmosphere (fog, mist, etc.)
      case weatherId === 800:
        return "☀"; // Clear sky
      case weatherId >= 801 && weatherId < 810:
        return "☁"; // Clouds
      default:
        return "❓"; // Unknown
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) fetchWeather(location);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex mx-auto container justify-center mt-2 max-w-3xl mt-4"
      >
        <input
          className="w-full max-w-sm px-4 py-2 border border-[var(--color-accent)] rounded-l-lg shadow-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition"
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          className="px-5 py-2 bg-[var(--color-primary)] text-white font-medium rounded-r-lg shadow-md hover:bg-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          type="submit"
        >
          Check Weather
        </button>
      </form>

      {error && <p className="text-[var(--color-primary)]">{error}</p>}

      {weatherData && (
        <div
          className={`flex mx-auto container justify-between mt-2 flex-col items-center bg-[var(--color-bg)] text-[var(--color-text)] p-4 rounded-lg shadow-md ${
            isBouncing ? "animate-pulse" : ""
          } ease-in-out max-w-3xl gap-4`}
        >
          <h2 className="text-[var(--color-primary)] font-bold text-xl">
            {weatherData.name}, {weatherData.sys?.country}
          </h2>
          <h3 className="text-[var(--color-secondary)] text-xl">
            {weatherData.weather?.[0]?.description}
          </h3>
          <h3 className="text-[var(--color-primary)] text-xl">
            🌡 Temp: {weatherData.main?.temp}°C
          </h3>
          <h3 className="text-[var(--color-secondary)] text-xl">
            💨 Wind: {weatherData.wind?.speed} m/s
          </h3>
          <h3 className="text-[var(--color-secondary)] text-xl">
            ♒ Humidity: {weatherData.main?.humidity} m/s
          </h3>
          <h3 className="text-[var(--color-secondary)]  animate-bounce mt-9 text-9xl">
            {displayEmoji(weatherData.weather[0].id)}
          </h3>
        </div>
      )}
    </>
  );
};

export default WeatherCheck;

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
        className="flex mx-auto container justify-center mt-2"
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
          className={`flex mx-auto container justify-center mt-2 flex-col items-center bg-[var(--color-bg)] text-[var(--color-text)] p-4 rounded-lg shadow-md ${
            isBouncing ? "animate-bounce" : ""
          } ease-in-out`}
        >
          <h2 className="text-[var(--color-primary)] font-bold text-xl">
            {weatherData.name}, {weatherData.sys?.country}
          </h2>
          <p className="text-[var(--color-secondary)]">
            {weatherData.weather?.[0]?.description}
          </p>
          <p className="text-[var(--color-primary)]">
            🌡 Temp: {weatherData.main?.temp}°C
          </p>
          <p className="text-[var(--color-secondary)]">
            💨 Wind: {weatherData.wind?.speed} m/s
          </p>
        </div>
      )}
    </>
  );
};

export default WeatherCheck;

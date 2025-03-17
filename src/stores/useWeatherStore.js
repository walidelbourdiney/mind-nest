import { create } from "zustand";

const useWeatherStore = create((set) => ({
  weatherData: null,
  error: null,
  fetchWeather: async (location) => {
    const apiKey = "65b26a7cdaa9232eecfdeb187ba3d4eb";

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) throw new Error("City not found. Please try again.");

      const data = await res.json();
      set({ weatherData: data, error: null });
    } catch (error) {
      set({ weatherData: null, error: error.message });
      console.error("Error fetching weather:", error);
    }
  },
}));

export default useWeatherStore;

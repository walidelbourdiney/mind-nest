import React from "react";
import Journaling from "./components/Journaling";
import Heading from "./components/Heading";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import WeatherCheck from "./components/WeatherCheck";
import JournalongHistory from "./components/JournalongHistory";
import Fav from "./components/Fav";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Heading />} />
        <Route path="/journaling" element={<Journaling />} />
        <Route path="/weather" element={<WeatherCheck />} />
        <Route path="/history" element={<JournalongHistory />} />
        <Route path="/fav" element={<Fav />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

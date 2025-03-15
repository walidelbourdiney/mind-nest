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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Heading />} />
        <Route path="/journaling" element={<Journaling />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import { Outlet, NavLink, Link, Links } from "react-router-dom";

const SiteLayout = () => {
  return (
    <>
      <header className="">
        <nav className=" py-5 flex justify-between items-center">
          <Link to="/">
            <h2 className="font-audiowide text-2xl text-primary">Mood Nest</h2>
          </Link>
          <div className="links flex justify-between items-center w-4/12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary text-xl font-bold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/journaling"
              className={({ isActive }) =>
                isActive ? "text-primary text-xl font-bold" : "text-gray-700"
              }
            >
              Journaling
            </NavLink>
            <NavLink
              to="history"
              className={({ isActive }) =>
                isActive ? "text-primary text-xl font-bold" : "text-gray-700"
              }
            >
              History
            </NavLink>
            <NavLink
              to="/fav"
              className={({ isActive }) =>
                isActive ? "text-primary text-xl font-bold" : "text-gray-700"
              }
            >
              Favorites
            </NavLink>
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                isActive ? "text-primary text-xl font-bold" : "text-gray-700"
              }
            >
              Weather
            </NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SiteLayout;

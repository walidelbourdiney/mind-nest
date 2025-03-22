import React, { useState } from "react";
import { Outlet, NavLink, Link  } from "react-router-dom";

const SiteLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="py-5 px-4 sm:px-6 md:px-8 lg:px-12 bg-[var(--color-bg)] shadow-md">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <h2 className="font-audiowide text-xl sm:text-2xl md:text-3xl text-[var(--color-primary)]">
              Mood Nest
            </h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Journaling", "History", "Favorites", "Weather"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={path}
                  className={({ isActive }) =>
                    (item === "Home" && location.pathname === "/") || isActive
                      ? "text-[var(--color-primary)] font-semibold border-b-2 border-[var(--color-primary)] pb-1"
                      : "text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors duration-300"
                  }
                >
                  {item}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-primary)] text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[var(--color-bg)] shadow-lg transition-all duration-300 z-100">
            <div className="flex flex-col items-center py-4 space-y-4">
              {["Home", "Journaling", "History", "Favorites", "Weather"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <NavLink
                    key={item}
                    to={path}
                    className="text-[var(--color-primary)] text-lg font-semibold hover:text-[var(--color-secondary)] transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default SiteLayout;

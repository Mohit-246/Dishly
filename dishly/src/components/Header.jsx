import { useState } from "react";
import { NavLink } from "react-router-dom";
import dishly from "../assets/dishly.png";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Saved", path: "/saved" },
    { name: "Add Recipes", path: "/add-recipe" },
    { name: "Profile", path: "/profile" },
    { name: "Login", path: "/login" },
    { name: "Signin", path: "/signin" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-screen z-50 top-0 flex items-center justify-between px-8 py-1 bg-stone-100">
      {/* Logo */}
      <div className="flex items-center gap-10">
        <img
          src={dishly}
          alt="Dishly Logo"
          className="w-24 md:w-28 lg:w-36 xl:w-44 h-auto"
        />

        {/* Navigation */}
        <nav className=" hidden md:flex gap-6 relative">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === "/"}>
              {({ isActive }) => (
                <div className="relative px-2 py-1.5">
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 bg-emerald-600 transition-transform duration-300 origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                  <span
                    className={`relative font4 text-gray-700 transition-colors duration-200 ${
                      isActive ? "text-emerald-600" : "hover:text-emerald-500"
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      <div>
        <input type="search" placeholder="Search Recipes" className="bg-gray-200 font1 text-gray-400 text-sm px-4 py-2 w-full rounded-full focus:outline-1" />
      </div>
      {/* Mobile Menu */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-bold text-sky-500 rounded-lg m-6"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col gap-4 p-4 md:hidden bg-white shadow-md absolute w-full top-full left-0 z-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={({ isActive }) =>
                `px-2 py-1.5 font-medium ${
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

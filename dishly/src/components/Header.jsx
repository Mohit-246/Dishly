import { NavLink } from "react-router-dom";
import dishly from "../assets/dishly.png";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Saved", path: "/saved" },
    { name: "Add Recipes", path: "/add-recipe" },
    { name: "Profile", path: "/profile" },
  ];

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
        <nav className="flex gap-6 relative">
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

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-3 py-2 font4 rounded-lg bg-gray-200 text-slate-600 hover:bg-emerald-500 hover:text-white transition">
          Login
        </button>
        <button className="px-3 py-2 font4 rounded-lg bg-emerald-600 text-white hover:bg-neutral-300 hover:text-slate-600 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
}

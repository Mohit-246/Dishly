import { NavLink } from "react-router-dom";
import Hero from "../assets/hero.png";

export default function Home() {
  return (
    <>
      <div className=" flex items-center h-screen w-screen mt-18 md:mt-0">
        <div className="flex flex-col px-20 items-start">
          <div className="py-4">
            <h2 className="text-4xl md:text-5xl font5 text-emerald-700">
              Discover, Cook, &
            </h2>
            <h2 className="text-4xl md:text-5xl font5 text-emerald-700">
              Share Delicious Moments
            </h2>
          </div>
          <div className="py-2 text-lg font3 text-gray-700">
            <p>
              Explore thousands of recipes, from quick weeknight dinners to
              gourmet delights.
            </p>
            <p>
              Join our community of food lovers and bring your kitchen creations
              to life.
            </p>
          </div>
          <div className="flex px-4 py-6 items-center gap-4 ">
            <NavLink to="/add-recipe" className="px-4 py-2 bg-emerald-700 font4 text-white rounded-full border-2 border-emerald-700 shadow-md transform duration-200 hover:scale-110">
              Explore Recipes
            </NavLink>
            <a href="#recipes" className="px-4 py-2 bg-gray-50 text-gray-800 font4  rounded-full border-2 border-emerald-700 shadow-md transform duration-200 hover:scale-110">
              Share Your Recipe
            </a>
          </div>
        </div>
        <div className="md:visible">
          <img src={Hero} alt="" />
        </div>
      </div>
    </>
  );
}

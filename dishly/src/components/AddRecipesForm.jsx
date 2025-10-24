import { useState } from "react";
import img from "../assets/AddRecipe.png";

export default function AddRecipesForm() {
  const [ingredients, setIngredients] = useState([""]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    instructions: "",
    prepTime: "",
    cookTime: "",
    servings: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle general form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle ingredient change
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  // Add a new ingredient field
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  // Remove an ingredient field
  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // for preview
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeData = { ...formData, ingredients };

    console.log("Submitted Data:", recipeData);
  };

  return (
    <>
      <div className="h-screen w-screen justify-center items-center mt-20 bg-stone-50">
        <div className="flex justify-evenly w-screen p-8 m-2 ">
          <div className="flex flex-col">
            <img src={img} alt="" className="md:visible" />
            <div className="bg-emerald-700/20 p-4 rounded-4xl">
              <h2 className="text-2xl font4 text-emerald-700 pb-6">
                Recipe Submission Rules
              </h2>
              <ul class="list-disc font2 text-gray-700 pl-5 space-y-1">
                <li>Use a clear and descriptive recipe name.</li>
                <li>
                  List each ingredient on a new line with proper measurements.
                </li>
                <li>
                  Write step-by-step instructions — keep them short and clear.
                </li>
                <li>Include accurate prep and cook times.</li>
                <li>Upload a clean, well-lit photo of the finished dish.</li>
                <li>
                  Double-check spelling and ingredient accuracy before
                  submitting.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 p-6 bg-gray-200 shadow-md rounded-4xl">
            <h2 className="text-4xl font4 text-emerald-700 text-shadow-md">
              Add Your Recipes
            </h2>
            <form action="" method="post" className="p-6 space-y-3 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Recipe Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Recipe Name"
                  className="font1 text-sm text-gray-400 bg-gray-300/60 px-3 py-1.5 rounded-4xl"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Descrption
                </label>
                <textarea
                  rows={4}
                  name="description"
                  placeholder="Description"
                  className="font1 text-sm text-gray-400 bg-gray-300/60 px-3 py-1.5 rounded-4xl"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Ingredients
                </label>
                <div className="flex flex-col">
                  <div className="grid grid-cols-2 gap-2">
                    {ingredients.map((ingredient, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={ingredient}
                          onChange={(e) =>
                            handleIngredientChange(index, e.target.value)
                          }
                          placeholder={`Ingredient ${index + 1}`}
                          className="font1 text-sm text-gray-400 bg-gray-300/60 px-3 py-1.5 rounded-4xl"
                          required
                        />
                        {ingredients.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeIngredient(index)}
                            className="bg-red-400 text-white font-bold px-2 rounded-full"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={addIngredient}
                    className="font1 text-sm bg-emerald-600 text-white py-1 px-1 rounded-full"
                  >
                    + Add Ingredient
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Instructions
                </label>
                <textarea
                  type="number"
                  name="instrctions"
                  rows={5}
                  value={formData.instructions}
                  onChange={handleChange}
                  placeholder="Instructions"
                  className="font1 text-sm text-gray-400 bg-gray-300/60 px-3 py-1.5 rounded-4xl"
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Prepration Time(in Mins)
                </label>
                <input
                  type="text"
                  name="preptime"
                  value={formData.prepTime}
                  onChange={handleChange}
                  placeholder="Prep-Time"
                  className="font1 text-sm text-gray-400 bg-gray-300/60 px-3 py-1.5 rounded-4xl"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Cooking Time
                </label>
                <input
                  type="text"
                  name="cooktime"
                  value={formData.cookTime}
                  onChange={handleChange}
                  placeholder="Cooking-Time"
                  className="font1 text-sm text-gray-400 bg-gray-300/60 px-3 py-1.5 rounded-4xl"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Servings
                </label>
                <input
                  type="tel"
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  placeholder="No. of People can be served"
                  className="font1 text-sm text-gray-400 bg-gray-300/60 px-3 py-1.5 rounded-4xl"
                  required
                />
              </div>
              <div className="flex gap-4">
                <label htmlFor="" className="px-2 font1 text-gray-700">
                  Image of Dish
                </label>
                <div className="relative w-full h-48 border-2  text-gray-400 bg-gray-300/60 border-hidden cursor-pointer flex items-center justify-center overflow-hidden rounded-4xl">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font1 text-gray-400">
                      Click to upload image
                    </span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="text-xl font4 bg-emerald-700 text-white px-3 py-2 rounded-full shadow-lg transform duration-200 hover:scale-110"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

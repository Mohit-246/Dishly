const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/mongodb");
const userRouter = require("./src/routes/userRoutes");
const recipeRouter = require("./src/routes/recipeRoutes");

const app = express();

connectDB();
dotenv.config({ debug: false });

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.use("/account/user", userRouter);
app.use("/account/recipe", recipeRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
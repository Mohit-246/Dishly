const bcrypt = require("bcryptjs");
const UserModel = require("../models/usermodel");
const token = require("../util/jwt");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "Missing Details" });
  }
  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "User Already Exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });

    await newUser.save();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    return res.json({ success: false, message: `Error Occured${error}` });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password in Required",
    });
  }
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.json({ success: false, message: "Invalid Email" });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      res.json({ success: false, message: "Invalid Password" });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true });
  } catch (error) {
    return res.json({ success: false, message: `Error Occured ${error}` });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ success: true, message: "User Logged out" });
  } catch (error) {
    return res.json({ success: false, message: `Error Occured ${error}` });
  }
};

module.exports = { register, login, logout };

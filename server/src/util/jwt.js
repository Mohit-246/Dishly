const jwt = require("jsonwebtoken");

const token = (id) => {
  return jwt.sign({ id: user_id }, process.env.JWT_SECERT, { expiresIn: "3d" });
};
module.exports = token;

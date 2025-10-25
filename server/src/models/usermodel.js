const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verifyOtp: { type: String, default: "" },
  verfyOtpExpireAt: { type: Number, default: 0 },
  isUserVerfied: { type: Boolean, default: false },
  resetOtp: { type: String, default: "" },
  resetOtpExpiredAt: { type: Number, default: 0 },
});

const UserModel = mongoose.model.user || mongoose.model("user", userSchema);

module.exports = UserModel;

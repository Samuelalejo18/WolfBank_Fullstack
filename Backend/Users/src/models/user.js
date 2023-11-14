const mongoose = require("mongoose");
const { number } = require("zod");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, unique: false, required: true },
    lastName: { type: String, unique: false, required: true },
    identificationCard: { type: Number, unique: true, required: true },
    userName:{ type: String, unique:true, required: true},
    email: { type: String, unique: true, required: true },
    balance: { type: Number, unique:false, required:true},
    password: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;

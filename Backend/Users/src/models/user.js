const mongoose = require("mongoose");
const { number } = require("zod");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, unique: false, required: true,trim:true, },
    lastName: { type: String, unique: false, required: true,trim:true, },
    identificationCard: { type: Number, unique: true, required: true,trim:true, },
    userName: { type: String, unique: true, required: true,trim:true, },
    email: { type: String, unique: true, required: true,trim:true, },
    balance: {
      type: Number,
      unique: false,
      required: false,
      default:0,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "Balance must be greater than or equal to 0",
      },
    },
    password: {
      type: String,
      required: true,
      unique: false,
      trim:true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;

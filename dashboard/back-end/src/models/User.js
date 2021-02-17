const { Schema, model } = require("mongoose");
const validator = require("validator");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validate: [validator.isEmail, "Please supply a valid email address"],
    },
    firstName: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    lastName: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    password: {
      type: String,
    },
    lastLoginDate: Number,
    imageUrl: { type: String, default: "", trim: true },
    isEmailConfirmed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toObject: { virtuals: true }, // when we convert to json or object, virtual fields are also displayed
    toJSON: { virtuals: true },
  }
);

UserSchema.index({ createdAt: 1 });

module.exports = model("User", UserSchema);

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      default: {
        url: "",
        name: "",
      },
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    location: {
      type: String,
    },
    city: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    role: {
      type: String,
    },
    serviceHistory: {
      type: Array,
      default: [],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new Schema(
  {
    name: {
      type: String,
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
      unique: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
    },
    locations: {
      type: Array,
      default: [],
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
    aadhar: {
      type: String,
      unique: true,
    },
    services: {
      type: Array,
      default: [],
    },
    reviews: {
      type: Array,
      default: [],
    },
    bookings: { 
      type: Array,
      default: [],
    },
    bookingHistory: {
      type: Array,
      default: [],
    },
    payments: {
      type: Array,
      default: [],
    },
    messages: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    status: {
      type: Boolean,
      required: true
    },
    gallery: {
      type: Array,
      default: [],
    },
    rank: {
      type: String,
      required: true,
    },
    bookings: {
      type: Array,
      default: [],
    },
    subServices: {
      type: Array,
      default: [],
    },
    tags: {
      type: Array,
      default: [],
    },
    reviews: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.models.Service || mongoose.model("Service", userSchema);

export default Service;

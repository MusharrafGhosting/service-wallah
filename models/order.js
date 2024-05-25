import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    service: {
      type: String,
      required: true,
    },
    quantity: {
      type: Object,
    },
    confirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    address: {
      type: Object,
    },
    complain: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    customerInfo: {
      type: Object,
    },
    OTP: {
      type: String,
    },
    VerificationImage: {
      type: Object,
      default: {
        url: "",
        name: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;

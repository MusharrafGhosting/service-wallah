import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
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
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", userSchema);

export default Admin;

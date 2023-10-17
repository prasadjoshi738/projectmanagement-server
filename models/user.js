import mongoose, { Schema, model } from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required:true
  },
  lastname: {
    type: String,
    required:true
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  Role: {
    type: String,
    required:true
  },
  verifiedrole: {
    type: String,
  },
  id: {
    type: String,
    required:true
  },
  Password: {
    type: String,
    required:true
  },
});
const User = mongoose.model("user", userSchema);

export default User;

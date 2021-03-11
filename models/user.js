import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model("User", userSchema);

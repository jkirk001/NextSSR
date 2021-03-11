import { Schema as _Schema, model, models } from "mongoose";
const Schema = _Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export default models.User || model("User", userSchema);
//! If model has already been initialized  -- export that model
//! OR -- If it hasnt -- create and export model(name, schema)

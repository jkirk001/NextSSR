import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema; //  shortening up mongoose.Schema for later

const reviewSchema = Schema({
  // using shortened Schema here
  body: String,
  rating: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Review", reviewSchema);

import dbConnect from "./dbConnect";
import User from "../models/user";

export async function preRenderJson() {
  await dbConnect();
  const users = await User.find({});
  const usersFinal = JSON.stringify(users);
  return usersFinal;
}

import mongoose from "mongoose";
const personSchema = new mongoose.Schema({
  name: String,
  country: String,
  track: String,
});

export default mongoose.model("ZuriTask", personSchema);

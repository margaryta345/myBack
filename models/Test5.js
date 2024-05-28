import mongoose from "mongoose";
//створення моделі схеми
const test5Schema = new mongoose.Schema({
  // title: String,
  // variants: Array,
  // correct: Number,
  title: String,
  answer: Number,
  options: Array,
});
export default mongoose.model("testFile", test5Schema);

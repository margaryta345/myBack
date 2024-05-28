import mongoose from "mongoose";
//створення моделі схеми
const test7Schema = new mongoose.Schema({
  // title: String,
  // variants: Array,
  // correct: Number,
  title: String,
  answer: Number,
  options: Array,
});
export default mongoose.model("testoop", test7Schema);

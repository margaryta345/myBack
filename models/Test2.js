import mongoose from "mongoose";
//створення моделі схеми
const test2Schema = new mongoose.Schema({
  // title: String,
  // variants: Array,
  // correct: Number,
  title: String,
  answer: Number,
  options: Array,
});
export default mongoose.model("testConditional", test2Schema);

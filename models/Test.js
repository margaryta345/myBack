import mongoose from "mongoose";
//створення моделі схеми
const testSchema = new mongoose.Schema({
  // title: String,
  // variants: Array,
  // correct: Number,
  title: String,
  answer: Number,
  options: Array,
});
export default mongoose.model("Test", testSchema);

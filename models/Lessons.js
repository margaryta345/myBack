import mongoose from "mongoose";
//створення моделі схеми
const lessonsSchema = new mongoose.Schema({
  name: String,
  lessons:Array,
});
export default mongoose.model("Lessons", lessonsSchema);

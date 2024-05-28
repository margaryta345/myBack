import mongoose from "mongoose";
//створення моделі схеми
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    startTestResult: Array,
    // done: [Object],
    done: Object,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  type: String,
  content: String,
  answer: String,
  explaination: String,
  info: String,
  choices: [String],
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;

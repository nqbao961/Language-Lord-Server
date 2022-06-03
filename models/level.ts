import mongoose from "mongoose";
import { ILevel } from ".";

const levelSchema = new mongoose.Schema({
  levelNumber: Number,
  quizIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
});

const Level = mongoose.model<ILevel>("Level", levelSchema);

export default Level;

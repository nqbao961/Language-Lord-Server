import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getQuiz,
  getQuizzes,
  updateQuiz,
} from "../controllers/quizzes";

const router = express.Router();

router.get("/", getQuizzes);
router.post("/", createQuiz);
router.get("/:id", getQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;

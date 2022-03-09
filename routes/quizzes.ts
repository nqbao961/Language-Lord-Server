import express from "express";
import { createQuiz, getQuizzes } from "../controllers/quizzes";

const router = express.Router();

router.get("/", getQuizzes);
router.post("/", createQuiz);

export default router;
